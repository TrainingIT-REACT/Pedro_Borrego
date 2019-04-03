import types from '../actions/types';

// Estado inicial
const initialState = {
    nowPLaying: null,
    playing: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PLAYING_SONG:
            return {
                ...state,
                nowPLaying: action.song,
            };
        case types.PLAY:
            return {
                ...state,
                playing: true
            };
        case types.PAUSE:
            return {
                ...state,
                playing: false
            }
        default:
            return state;
    }
}

export default reducer;