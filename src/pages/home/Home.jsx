import React from 'react'
import Footer from '../../Components/Footer/Footer';
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
            <Footer />
        </>
    )
}

export default Home