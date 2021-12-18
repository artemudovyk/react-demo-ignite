import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loadGameDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { getResizedImageUrl } from '../utils';

const imageMaxPixelWidth = 600;

function Game({ name, released, id, image, slug }) {
    const dispatch = useDispatch();

    // Handlers
    const loadDetailHandler = (e) => {
        // Make the rest of the document except detail modal unscrollable.
        // We are changing back it in GameDetail with document.body.style.overflow = 'auto'
        document.body.style.overflow = 'hidden';
        dispatch(loadGameDetail(id));
    };

    return (
        <SGame onClick={loadDetailHandler}>
            <Link to={`/games/${id}/${slug}/`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={getResizedImageUrl(image, imageMaxPixelWidth)} alt={name} />
            </Link>
        </SGame>
    );
}

const SGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;
