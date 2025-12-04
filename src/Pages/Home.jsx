import React from 'react';
import Slide from '../Components/Slide';
import { Link, useLoaderData } from 'react-router';
import GameCard from '../Components/GameCard';
import Newsletter from '../Components/Newsletter';
import Container from '../Components/Container';


const Home = () => {
    const Data = useLoaderData()
    const GameData = Data.sort((a,b)=> b.ratings - a.ratings).slice(0,4)
    


    
    return (
        <div>
            <title>DashBoard</title>
            <div className='mt-9'>
            <Slide></Slide>
            </div>
            
            <div>
                <div className='bg-black/60 backdrop-blur-md w-11/12 md:w-5/10 mx-auto p-3 rounded-full mt-12'>
                <h2 className='text-5xl dotmatrix text-center   text-red-400'>TOP-RATED TITLES OF 2025</h2>

                </div>
              
                <div className='my-8 grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 w-9/12 mx-auto'>
                   
                   {GameData.map(game=><GameCard game={game}></GameCard>)}

               </div>
               
                <div className='flex justify-center items-center'>
                <Link to={'/gamessection'}><button className='btn btn-outline hover:bg-linear-65 from-purple-500 to-red-400'>Browse All Games</button></Link>

                </div>

                <Container>
                <Newsletter></Newsletter>

                </Container>

                
                

            </div>
            
        </div>
    );
};

export default Home;