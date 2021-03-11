import React from 'react';
import League from '../League/League';
import './Home.css';

const Home = () => {
    return (
        <div className="awesome">
            <div id="bgImg">
            <h1>Sports Mania</h1>
            </div>
        <div className="home">
       <League></League>        
       </div>
        </div>
    );
};

export default Home;