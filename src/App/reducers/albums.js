import types from '../actions/types';

// Estado inicial
const initialState = {
    collection: [],
    current: null,
    visitedAlbums: []
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_COLLECTION:
            return {
                ...state,
                collection: action.albums
            };
        case types.SET_CURRENT:
            return {
                ...state,
                current: action.album,
                visitedAlbums: state.visitedAlbums.includes(action.album) ? [
                    ...state.visitedAlbums, action.album
                ] : visitedAlbums
            };
        default:
            return state;
    }
}

export default reducer;
