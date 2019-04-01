import types from './types';

export const setplayingSong = (song) => ({
    type: types.SET_PLAYING_SONG,
    plaiying: true, //autoplays when cahnging song
    song
});

export const play = () => ({
    type: types.PLAY
});

export const pause = () => ({
    type: types.PAUSE
});