import types from './types';

export const setCollection = (albums) => ({
    type: types.SET_COLLECTION,
    albums
});

export const setCurrent = (album) => ({
    type: types.SET_CURRENT,
    album
});
