import React, { useEffect, useState } from 'react';
import './League.css';
import InfoLeague from './InfoLeague/InfoLeague';

const League = () => {
  const [league, setLeague] = useState([false]);
  useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => res.json())
      .then(data => setLeague(data.leagues))
      
  }, []);
    return (
      <div>
        <div className="container div">
      {
        league.map(league => <InfoLeague league={league}></InfoLeague>)
      }
      </div></div>
    );
};
export default League;