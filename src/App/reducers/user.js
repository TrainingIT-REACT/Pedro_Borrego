import types from '../actions/types';

// Estado inicial
const initialState = {
    user: null,
    login: false
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                user: action.user,
                login: true
            };
        case types.UPDATE_INFO:
            return {
                ...state,
                user: action.user,
                login: true
            };
        case types.LOGOUT:
            return {
                ...state,
                user: null,
                login: false
            }
        default:
            return state;
    }
}

export default reducer;
