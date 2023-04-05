import React from 'react';
import Hero from "../Hero";
import Books from "../Books";
import Follow from "../Follow";
import Accordion from "../Accordion";
import Footer from "../Footer";

const MainPage = () => {
    return (
        <div>
            <Hero/>
            <Books/>
            <Follow/>
            <Accordion/>
            <Footer/>
        </div>
    );
};

export default MainPage;