import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import League from '../League/League';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Home.css";

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    // console.log(leagues);
    const selectLeagues = leagues.slice(0, 15);

    return (
        <div>
            <Banner></Banner>
            <div className="row league-background d-flex justify-content-center">
                {
                    selectLeagues.map(leagues => <League league={leagues} key={leagues.idLeague}></League>)
                }
            </div>
        </div>
    );
};

export default Home;