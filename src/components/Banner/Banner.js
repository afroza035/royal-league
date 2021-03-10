import React from 'react';
import playground from '../../images/plargrond.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-style">
            <img src={playground} alt="" />
            <h2 className="royal-league">Royal League</h2>
        </div>
    );
};

export default Banner;