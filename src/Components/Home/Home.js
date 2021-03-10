import React, { useEffect, useState } from 'react';
import AboutLeague from '../AboutLeague/AboutLeague';
import Header from '../Header/Header';
import League from '../League/League';
import './Home.css';

const Home = () => {
    
  
  
    return (
        <div>
            <Header></Header>
        <div className="home">
       <League></League>        
       </div>
        </div>
    );
};

export default Home;