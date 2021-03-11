import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMars, faNeuter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Male from '../images/male.png';
import './LeagueDetails.css';
import Female from '../images/female.png';
import Banner from '../components/Banner/Banner';

const LeagueDetail = () => {
    const { leagueId } = useParams();
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [])
    const { strBanner, strLeague, intFormedYear, strCountry, strSport, strGender, strLogo, strDescriptionEN, strDescriptionFR } = league;

    return (
        <div className="full-league-detail">
            <div className="img-banner">
                <Banner bannerImg = {strBanner} logoImg={strLogo} logoImgShow={true}></Banner>
                {/* {strBanner === null ? <Banner></Banner> : <img src={strBanner} alt="" />} */}
                <div className="row card-style d-flex align-items-center">
                    <div className="col-md-6">
                        <h2>{strLeague}</h2>
                        <p><FontAwesomeIcon icon={faNeuter} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="col-md-6 small-img">
                        {strGender === "Female" ? <img src={Female} alt="" /> : <img src={Male} alt="" />}
                    </div>
                </div>
                <div className="text-area">
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionFR}</p>
                </div>
            </div>
            <div className="footer">
                <a target="_blank" href="http://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
                <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    );
};

export default LeagueDetail;