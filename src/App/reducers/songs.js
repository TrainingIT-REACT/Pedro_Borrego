import types from '../actions/types';

// Estado inicial
const initialState = {
    //default song loaded on the player
    nowPLaying: {
        "id": "",
        "name": "",
        "audio": "",
        "seconds": "",
        "album_id": ""
    },
    history: [],
    recomendations: [1, 3, 7, 9, 17, 28, 29, 40, 41, 42],
    playing: false,
    songlist: [],
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PLAYING_SONG:
            return {
                ...state,
                nowPLaying: action.song,
                history: [...state.history, action.song],
                playing: true
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
        case types.SET_SONGS_COLLECTION:
            return {
                ...state,
                songlist: action.songs
            }

        default:
            return state;
    }
}

export default reducer;