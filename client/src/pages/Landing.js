import React from 'react';
import Favorites from '../components/Favorites';

const Landing = () => {

    return (
        <div className="container">
            <div className="jumbo">

                <h2 className="jumbo-body">We proudly offer the finest meats for all your dining needs. We offer hand trimmed steaks and roasts, sustainably sourced seafood and delicious desserts. Whether cooking for yourself, hosting friends or throwing a party you can find right meats for you. </h2>
            </div>
            <Favorites></Favorites>
        </div>
    );
};

export default Landing;