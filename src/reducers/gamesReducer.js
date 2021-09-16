const initState = {
    popular: [],
    recent: [],
    upcoming: [],
    searched: [],
};

function gamesReducer(state = initState, action) {
    switch (action.type) {
        case 'FETCH_GAMES':
            return { 
                ...state, 
                popular: action.payload.popular,
                recent: action.payload.recent,
                upcoming: action.payload.upcoming,
            };
        default:
            return { ...state };
    }
}

export default gamesReducer;
