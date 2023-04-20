import React from 'react';
import Hero from "../Hero";
import Books from "../Books";
import Follow from "../Follow";
import Accordion from "../Accordion";


const MainPage = () => {
    return (

        <div>
            <Hero/>
            <Books/>
            <Follow/>
            <Accordion/>
        </div>
    );
};

export default MainPage;