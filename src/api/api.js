import dotaKey from "../secret/dotaKey";

const getMatchById = (matchId) => {
  return fetch(`https://api.opendota.com/api/matches/${matchId}?api_key=${dotaKey}`)
    
};

export {getMatchById};
