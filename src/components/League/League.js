import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './League.css';

const Leagues = (props) => {
    const { idLeague } = props.league;
    const [league, setLeague] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))

    }, [])
    // console.log(league);
    const { strLogo, strLeague, strSport } = league;

    return (
        <div className="col-md-3 league-part">
            <div className="p-2">
                <img src={strLogo} alt="" />
                <h2>{strLeague}</h2>
                <p>Sports type: {strSport}</p>
                <Link to={`/league/${idLeague}`}><button className="btn btn-info">Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>
        </div>
    );
};

export default Leagues;