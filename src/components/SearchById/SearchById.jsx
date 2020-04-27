import React, {useState} from 'react'
import {getMatchById} from '../../api/api'

const SearchById = () => {
  let [matchId, setMatchId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getMatchById(matchId);
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
    </div>
  )
  }

export default SearchById;