// Definimos la lista de acciones
const actions = [
    // User
    "LOGIN",
    "UPDATE_INFO",
    "LOGOUT",

    // ALBUMS
    "SET_COLLECTION",
    "SET_CURRENT",

    //SONGS
    "SET_PLAYING_SONG",
    "PLAY",
    "PAUSE",
    "SET_SONGS_COLLECTION"

    //OPCIONAL PLAYLIST REDUCER ACTIONS
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
    actionTypes[action] = action;
});

export default actionTypes;