import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Container from '../Components/Container';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div className='bg-black'>
            <header>
                <Container>
                <Navbar></Navbar>

                </Container>
                
            </header>
            <main className=' bg-linear-to-br from-black via-gray-900 to-red-900'>
                
                <Outlet></Outlet>

              
               
              
            </main>
            <Container>
                    <Footer></Footer>
                </Container>
        </div>
    );
};

export default AuthLayout;