import React from 'react'
import Header from '../components/Header';
import Section from '../components/Section';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { CardDataOne} from '../components/Card/CardData';

const Home = () => {
    return (
        <>
          <Header />
          <About />
          <Section {...CardDataOne} /> 
          <Services />
          <Footer /> 
        </>
    )
}

export default Home;
