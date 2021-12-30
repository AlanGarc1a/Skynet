import React, {useState} from 'react'
import Header from '../components/Header';
import Section from '../components/Section';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import SideBar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
    }

    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <Header />
          <About />
          <Section  /> 
          <Services />
          <Footer /> 
        </>
    )
}

export default Home;
