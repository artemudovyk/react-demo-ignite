import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';

export function loadGameDetail(gameId) {
    return async (dispatch) => {
        dispatch({ type: 'LOADING_DETAIL' });

        const gameDetailsData = await axios.get(gameDetailsURL(gameId));
        const gameScreenshotData = await axios.get(gameScreenshotURL(gameId));

        dispatch({
            type: 'FETCH_GAME_DETAILS',
            payload: {
                gameDetails: gameDetailsData.data,
                gameScreenshot: gameScreenshotData.data.results,
            },
        });
    };
}
