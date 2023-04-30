import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../shared/context/AuthContext';
import styles from '../../shared/assets/styles.module.css';
import { DisplayDeck, DisplayDeckGridContainer } from '../../shared/styled/DisplayDeck.styled';
import { GET_DECKLIST_ENDPOINT } from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Deck from './Deck';
import Fuse from 'fuse.js'
import { SearchBox, SearchInput, SearchButton } from '../../shared/styled/Search.styled';

const fuseOptions = {
	isCaseSensitive: false,
	includeScore: true,
	shouldSort: true,
	findAllMatches: true,
	threshold: 0.2,
	keys: [
		"deckName"
	]
};

export default function ManageDeckPage() {
	const authContext = useContext(AuthContext);
	const navigate = useNavigate();
	
	const [deckList, setDeckList] = useState([]);
	const [displayDeck, setDisplayDeck] = useState([]);
	const [filteredDeck, setFilteredDeck] = useState([]);

	let fuse;
	const [query, setQuery] = useState('');
	let deckElements = [];

	// fetch user flashcards
	useEffect(() => {
		const id = localStorage.getItem('userId');
		fetch(GET_DECKLIST_ENDPOINT(id), {
			headers: {
				'Authorization': `Bearer ${authContext.auth.token}`
			}
		})
			.then(res => res.json())
			.then(data => {
				setDeckList(data?.details);
				window.localStorage.setItem('decks', JSON.stringify(data?.details))
			});
	}, []);

	useEffect(() => {
		fuse = new Fuse(deckList, fuseOptions);
		let searchedList = fuse?.search(query);
		let temp= searchedList.map(item => item.item)
		setFilteredDeck(temp);
	}, [query])

	useEffect(() => {
		if(filteredDeck.length > 0) {
			setDisplayDeck(filteredDeck);
		} 
		else {
			setDisplayDeck(deckList);
		}
	}, [deckList, filteredDeck])

	// map data from fetch request to react component
	deckElements = displayDeck.map(deck => {
		return <Deck deck={deck} key={deck._id}/>;
	});

	const handleAddDeck = () => {
		navigate('/add');
	}
	return(
		<section className={styles['container']} style={{alignItems: 'center'}}>
			<div>
				<h3>Deck list</h3>
				<p>Manage flashcards or create a new deck</p>
			</div>
			<SearchBox>
				<form onSubmit={(e) => e.preventDefault()}>
					<SearchInput
						type='text' 
						placeholder='Search'
						value={query}
						onChange={(e) => {setQuery(e.target.value)}}
					/>
					<SearchButton>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</SearchButton>
				</form>
				
			</SearchBox>
			<DisplayDeckGridContainer>
				<DisplayDeck onClick={(e) => {handleAddDeck()}}>
						<FontAwesomeIcon icon={faPlus} style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', transform: 'scale(2)'}}/>
				</DisplayDeck>
				
				{deckElements}
			</DisplayDeckGridContainer>
		
		</section>
	);
}

