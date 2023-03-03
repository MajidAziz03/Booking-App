import React from 'react'
import Header from '../../Components/header/Header';
import Hero from '../../Components/hero/Hero';
import Navbar from '../../Components/navbar/Navbar';
import './home.scss';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Hero />
        </>
    )
}

export default Home