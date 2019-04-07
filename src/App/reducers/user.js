import types from '../actions/types';

// Estado inicial
const initialState = {
    user: { usarname: "demo", password: "demo" },
    login: false,
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return action.user.usarname == state.user.usarname && action.user.password == state.user.password ? {
                ...state,
                login: true
            } : {
                    ...state,
                    login: false
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
                login: false
            }
        default:
            return state;
    }
}

export default reducer;
