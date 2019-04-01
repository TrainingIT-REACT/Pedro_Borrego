import types from './types';

export const logIn = (user) => ({
    type: types.LOGIN,
    login: true,
    user
});

export const editInfo = (user) => ({
    type: types.UPDATE_INFO,
    user
});

export const logOut = () => ({
    type: types.LOGOUT
})