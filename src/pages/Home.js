import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Profile from '../components/Profile';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <Profile/>
            <About/>
            <Certifications/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;