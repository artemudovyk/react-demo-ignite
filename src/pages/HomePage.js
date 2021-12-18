import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGamesAction } from '../actions/gamesActions';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';

import Game from '../components/Game';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function HomePage() {
    // Get the current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2]

    // Fetch games
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGamesAction());
    }, [dispatch]);

    const { popular, recent, upcoming } = useSelector((state) => state.games);
    // const gameDetails = useSelector((state) => state.gameDetails)
    

    return (
        <SGamesWrapper>
            { pathId && <GameDetail /> }
            <h2>Popular Games</h2>
            <SGamesList>
                {popular.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        slug={game.slug}
                    />
                ))}
            </SGamesList>

            <h2>New Games</h2>
            <SGamesList>
                {recent.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        slug={game.slug}
                    />
                ))}
            </SGamesList>

            <h2>Upcoming Games</h2>
            <SGamesList>
                {upcoming.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        slug={game.slug}
                    />
                ))}
            </SGamesList>
        </SGamesWrapper>
    );
}

const SGamesWrapper = styled(motion.div)`
    padding: 0rem 5rem;

    h2 {
        padding: 5rem 0rem;
    }
`;

const SGamesList = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default HomePage;
