import React from 'react';
import League from '../League/League';
import './Home.css';
import photo from './istockphoto-469732852-612x612.jpg';

const Home = () => {
    return (
        <div className="awesome">
            
            <div>
                <img id="img" src={photo} alt=""/>
            </div>
        <div className="home">
       <League></League>
       </div>
        </div>
    );
};

export default Home;