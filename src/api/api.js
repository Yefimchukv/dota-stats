import dotaKey from "../secret/dotaKey";

//5382148400
const getMatchById = async (matchId) => {
  const result = await fetch(`https://api.opendota.com/api/matches/${matchId}?api_key=${dotaKey}`);

  if (result.status === 200) {
    const data = await result.json();
    
    console.log(data);
  }


}

export {getMatchById};
