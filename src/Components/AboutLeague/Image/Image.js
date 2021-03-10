import React from 'react';
import './Image.css';

const Image = (props) => {
    const {strBadge} = props.detail;
    return (
        <div>
            <img className="img" src={strBadge} alt=""/>
        </div>
    );
};

export default Image;