import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMars, faNeuter, faRss } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Male from '../images/male.png';
import './LeagueDetails.css';
import Female from '../images/female.png';

const LeagueDetail = () => {
    const { leagueId } = useParams();
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [])
    console.log(league);
    const { strBanner, strLeague, intFormedYear, strCountry, strSport, strGender, strRSS, strTwitter, strYoutube } = league;
    const newStrTwitter = 'https:/' + strTwitter;
    const newStrYoutube = 'https:/' + strYoutube;
    const newStrRss = 'https:/' + strRSS;
    return (
        <div className="full-league-detail">
            <div className="img-banner">
                <img src={strBanner} alt="" />
                <div className="row card-style d-flex align-items-center">
                    <div className="col-md-6">
                        <h2>{strLeague}</h2>
                        <p><FontAwesomeIcon icon={faNeuter} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="col-md-6 small-img">
                        {strGender === "Male" ? <img src={Male} alt="" /> : <img src={Female} alt="" />}
                    </div>
                </div>
                <div className="text-area">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed, sequi necessitatibus numquam repellat dolor facilis ab libero minus quibusdam neque cum pariatur, exercitationem voluptates natus est nulla voluptatem! Deserunt, atque consequatur maiores veniam id asperiores modi fugit quae blanditiis expedita, quasi consectetur placeat magnam. Molestias blanditiis in sequi distinctio!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, laboriosam! Sint unde provident eveniet officia distinctio asperiores commodi in voluptate molestiae repellendus nihil, doloremque repellat quas voluptatibus modi aut libero. Tempora corporis at rem nihil minima natus eveniet et nam fuga ullam porro voluptate quas repellat dolorum, reprehenderit assumenda. Placeat!</p>
                </div>
            </div>
            <div className="footer">
                <a target="_blank" href={newStrTwitter}><FontAwesomeIcon icon={faTwitter} /></a>
                <a target="_blank" href={newStrRss}><FontAwesomeIcon icon={faRss} /></a>
                <a target="_blank" href={newStrYoutube}><FontAwesomeIcon icon={faYoutube} /></a>

            </div>
        </div>
    );
};

export default LeagueDetail;