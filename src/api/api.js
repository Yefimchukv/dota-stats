import dotaKey from "../secret/dotaKey";

const getMatchById = async () => {
  const result = await fetch(`https://api.opendota.com/api/matches/5382148400?api_key=${dotaKey}`);

  if (result.status === 200) {
    const data = await result.json();
    
    console.log(data);
  }


}

export {getMatchById};
