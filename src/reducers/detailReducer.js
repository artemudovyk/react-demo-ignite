const initState = {
    game: { platforms: [] },
    screenshots: [],
    isLoading: true,
};

function detailReducer(state = initState, action) {
    switch (action.type) {
        case 'FETCH_GAME_DETAILS':
            return {
                ...state,
                game: action.payload.gameDetails,
                screenshots: action.payload.gameScreenshot,
                isLoading: false,
            };
        case 'LOADING_DETAIL':
            return {
                ...state,
                isLoading: true,
            };
        default:
            return { ...state };
    }
}

export default detailReducer;
