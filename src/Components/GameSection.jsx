import React from 'react';
import GameCard from './GameCard';
import Container from './Container';

const GameSection = ({gameData}) => {
    console.log(gameData)
    return (
        <>
        <Container>
        <div className='grid grid-cols-4 gap-4'>
            {gameData.map(game=><GameCard game={game}></GameCard>)}
            
        </div>
        </Container>
        </>
    );
};

export default GameSection;