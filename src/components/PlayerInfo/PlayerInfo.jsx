function PlayerInfo(props) {

  if (props.playerDetails !== undefined) {
    
      console.log(props)  

    return (
      <div>
      <ul>
        <li>{props.playerDetails.profile.personaname}</li>
        <li>{props.playerDetails.mmr_estimate.estimate}</li>
        <li>{props.playerDetails.profile.plus ? "Dota plus user" : "Doesn't use Dota Plus"}</li>
        <li><a href={props.playerDetails.profile.profileurl} alt=''>Steam profile</a></li>
        <li>{props.playerDetails.rank_tier}</li>
        <li>{props.playerDetails.rank_tier}</li>
        <li>{props.playerDetails.rank_tier}</li>
        <li>{props.playerDetails.rank_tier}</li>
        <li>{props.playerDetails.rank_tier}</li>
      </ul>
      </div>
    )
  }
  return <div></div>
  
}