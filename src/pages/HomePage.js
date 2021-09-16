import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGamesAction } from '../actions/gamesActions';
import Game from '../components/Game';
import { motion } from 'framer-motion';
import styled from 'styled-components';

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGamesAction());
    }, [dispatch]);

    const { popular, recent, upcoming } = useSelector((state) => state.games);

    return (
        <SGamesWrapper>
            <h2>Upcoming Games</h2>
            <SGamesList>
                {upcoming.map((game) => (
                    <Game
                        key={game.id}
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
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
