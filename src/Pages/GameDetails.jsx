import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import GameDetailsCard from './GameDetailsCard';
import Container from '../Components/Container';

const GameDetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
    // console.log(id, data)
    const [gameData, setGameData] = useState({})

    useEffect(()=>{
       const gameDetails = data.find(game=> game.id == id)
       setGameData(gameDetails)
    },[id, data])
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <title>Game Info</title>
            <Container>
            <GameDetailsCard gameData={gameData}></GameDetailsCard>
            </Container>
        </div>
    );
};

export default GameDetails;