import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getResizedImageUrl } from '../utils';

const maxImageWidthPx = 1280;

function GameDetail() {
    const { game, screenshots, isLoading } = useSelector((state) => state.gameDetails);
    const history = useHistory();

    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')) {
            // Make windows scrollable again when we click outside of modal window
            document.body.style.overflow = 'auto';
            // Go back to the home page
            history.push('/');
        }
    }

    return (
        <>
            {!isLoading && (
                <SCardShadow className="shadow" onClick={exitDetailHandler}>
                    <SGameDetail>
                        <SStats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <SInfo>
                                <h3>Platforms</h3>
                                <SPlatforms>
                                    {game.platforms.map((data) => (
                                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                                    ))}
                                </SPlatforms>
                            </SInfo>
                        </SStats>
                        <SMedia>
                            <img src={getResizedImageUrl(game.background_image, maxImageWidthPx)} alt={game.name} />
                        </SMedia>
                        <SDescription>
                            <p>{game.description_raw}</p>
                        </SDescription>
                        <div className="gallery">
                            {screenshots.map((screenshot) => (
                                <img src={getResizedImageUrl(screenshot.image, maxImageWidthPx)} key={screenshot.id} alt={game.name} />
                            ))}
                        </div>
                    </SGameDetail>
                </SCardShadow>
            )}
        </>
    );
}

const SCardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track {
        background: white;
    }
`;

const SGameDetail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;

    img {
        max-width: ${maxImageWidthPx}px;
        width: 100%;
        margin: 0 auto;
    }
`;

const SStats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const SInfo = styled(motion.div)`
    text-align: center;
`;

const SPlatforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin-left: 3rem;
    }
`;

const SMedia = styled(motion.div)`
    margin-top: 5rem;
`;

const SDescription = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail;
