import { Front } from '../../components/styles/Flashcard.styled';

export default function CardFront({ cardDetails, showMeaningProp, setShowMeaningProp, handleEditClick }) {
    const handleShowClick = (e) => {
        setShowMeaningProp(!showMeaningProp);

    }
    return(
        <Front>
            <div className="practice-header">
                    <div className="front">{cardDetails.front}</div>
                </div>
                <div className="practice-buttons">
                    <button onClick={handleShowClick}>Show</button>
                    <button onClick={handleEditClick}>Edit deck</button>
            </div>
        </Front>
    );
}