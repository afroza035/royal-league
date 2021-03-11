import React from 'react';
import playground from '../../images/plargrond.jpg';
import './Banner.css';

const Banner = (props) => {
    const logoImg = props.logoImg;
    const logoImgShow = props.logoImgShow;
    const bannerImg = props.bannerImg;
    return (
        <div className="banner-style">
            {logoImgShow === true &&  bannerImg !== null ? <img src={bannerImg} alt=""/> : <img src={playground} alt="" />}
            {logoImgShow === true ? <img className="royal-league logoImg-style" src={logoImg} alt="" /> : <h2 className="royal-league">Royal League</h2>}

        </div>
    );
};

export default Banner;