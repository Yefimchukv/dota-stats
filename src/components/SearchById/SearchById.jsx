import React, { useState } from 'react'
import { getMatchById } from '../../api/api'
import MatchInfo from '../MatchInfo/MatchInfo';
import DataManager from '../../containers/DataManager/DataManager';
  
const SearchById = () => {
  let [matchId, setMatchId] = useState("");
  let [matchInfo, setMatchInfo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
      getMatchById(matchId)
        .then((res) => res.json())
        .then((data) => setMatchInfo(data))
        .catch((err) => console.error(err));
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      Enter your Match Id: <input type='text'
                                  className='match-id__input'
                                  value={matchId}
                                  onChange={(e) => setMatchId(e.target.value)}/>                                  
                
                                  <button>Search</button>
    </form>
    <div>
    {matchInfo && matchId ? <MatchInfo details={matchInfo}/> : null}
    {matchInfo ? <DataManager playersDetails={matchInfo.players}/> : null}
    </div>
    </div>
  )
}

export {SearchById};