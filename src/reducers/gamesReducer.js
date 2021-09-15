const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
};

function gamesReducer(state=initState, action) {
    switch(action.type) {
        case 'FETCH_GAMES':
            return {...state};
        default:
            return {...state}
    }
}

export default gamesReducer;