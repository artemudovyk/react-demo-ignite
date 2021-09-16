import axios from 'axios';
import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    searchGameURL,
} from '../api';

export function loadGamesAction() {
    return async (dispatch) => {
        const popularGamesData = await axios.get(popularGamesURL());
        const newGamesData = await axios.get(newGamesURL());
        const upcomingGamesData = await axios.get(upcomingGamesURL());

        dispatch({
            type: 'FETCH_GAMES',
            payload: {
                popular: popularGamesData.data.results,
                recent: newGamesData.data.results,
                upcoming: upcomingGamesData.data.results,
            },
        });
    };
}
