import React from 'react';
import Slide from '../Components/Slide';
import { Link, useLoaderData } from 'react-router';
import GameCard from '../Components/GameCard';


const Home = () => {
    const Data = useLoaderData()
    const GameData = Data.slice(0,4)
    


    
    return (
        <div>
            <Slide></Slide>
            <div>
                <h2 className='text-5xl dotmatrix text-center mt-12  text-red-600'>TOP-RATED TITLES OF 2025</h2>
              
                <div className='mt-8 grid grid-cols-4 container mx-auto'>
                   
                   {GameData.map(game=><GameCard game={game}></GameCard>)}

               </div>
               
                <div className='flex justify-center items-center'>
                <Link to={'/gamessection'}><button className='btn btn-outline'>Browse All Games</button></Link>

                </div>
                

            </div>
            
        </div>
    );
};

export default Home;