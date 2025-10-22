import React from 'react';
import Slide from '../Components/Slide';
import GameSection from '../Components/GameSection';
import { useLoaderData } from 'react-router';

const Home = () => {

    const gameData = useLoaderData()
    return (
        <div>
            <Slide></Slide>
            <div>
                <h2 className='text-5xl dotmatrix text-center mt-12  text-red-600'>POPULAR GAMES IN 2025</h2>
                <div className='mt-8'>

                    <GameSection gameData={gameData}> </GameSection>
                </div>
            </div>
            
        </div>
    );
};

export default Home;