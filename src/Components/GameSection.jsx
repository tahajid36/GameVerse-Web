import React from 'react';
import GameCard from './GameCard';
import Container from './Container';
import { useLoaderData } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const GameSection = () => {
    const gameData = useLoaderData()
    console.log(gameData)
    return (
        <>
        <div className='bg-black'>
            <title>All Games</title>
        <Container>
            <Navbar></Navbar>
        </Container>
        <Container>
        <h2 className='text-5xl dotmatrix text-center mt-12  text-red-600'>POPULAR GAMES IN 2025</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 mt-10 '>
            {gameData.map(game=><GameCard game={game}></GameCard>)}
            
        </div>
        </Container>
        <Container>
            <Footer></Footer>
        </Container>
        </div>
        </>
    );
};

export default GameSection;