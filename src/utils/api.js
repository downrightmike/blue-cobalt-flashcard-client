// Interface for server endpoints
// Authentication endpoints
export const POST_LOGIN_ENDPOINT = () => `${process.env.REACT_APP_SERVER_BASE_URL}/login/`;
export const POST_REGISTER_ENDPOINT  = () => `${process.env.REACT_APP_SERVER_BASE_URL}/register/`;

// Deck and Card endpoints
// export const GET_DECKS_ENDPOINT = () => '/deck/';
export const GET_DECKLIST_ENDPOINT = (userId) => `${process.env.REACT_APP_SERVER_BASE_URL}/deck/${userId}`;
export const GET_DECK_ENDPOINT = (deckId) => `${process.env.REACT_APP_SERVER_BASE_URL}/deck/get/${deckId}`
export const ADD_DECK_ENDPOINT = () => `${process.env.REACT_APP_SERVER_BASE_URL}/deck`
export const UPDATE_DECK_ENDPOINT = (deckId) => `${process.env.REACT_APP_SERVER_BASE_URL}/deck/update/${deckId}`;
export const DELETE_DECK_ENDPOINT = (deckId) => `${process.env.REACT_APP_SERVER_BASE_URL}/deck/delete/${deckId}`;

export const GRADE_CARD_ENDPOINT = () => `${process.env.REACT_APP_SERVER_BASE_URL}/deck/cards/grade`;
