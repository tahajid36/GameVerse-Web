import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Container from '../Components/Container';

const MainLayout = () => {
    return (
        <div className='bg-black'>
            <Container>
            <Navbar></Navbar>
            </Container>
            <Outlet></Outlet>
            <Container>
            <Footer></Footer>
            </Container>

        </div>
    );
};

export default MainLayout;