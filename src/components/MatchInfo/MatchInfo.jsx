import React from 'react'


export default function MatchInfo(props) {
  if (props.details !== undefined) {
    console.log(props.details)
    const matchDate = new Date(props.details.start_time * 1000);
    const isRadiantWin = props.details.radiant_win;
    

    return (
      <div>
        <div className='shortTable'>
      <ul>
        <li>Your match: {props.details.match_id}</li>
        <li>Duration: {(props.details.duration / 60).toFixed(2)}</li>
        <li>Game mode: {props.details.game_mode}</li>
        <li>Skill bracket: {props.details.skill}</li>
        <li>Start time: {matchDate.toString()}</li>
        <li>(Radiant){props.details.radiant_score} : {props.details.dire_score}(Dire)</li>
        <li> {isRadiantWin ? "Radiant Victory!" : "Dire Victory!"}</li>
        </ul>
      </div>

      <div className='longTable'>
        <ul className='playersWrap'>
          <li className='playerItem'>{props.details.players[0].personaname ? props.details.players[0].personaname : "Anonymous"}</li>
          <li className='playerItem'>{props.details.players[1].personaname ? props.details.players[1].personaname : "Anonymous"}</li>
          <li className='playerItem'>{props.details.players[2].personaname ? props.details.players[2].personaname : "Anonymous"}</li>
          <li className='playerItem'>{props.details.players[3].personaname ? props.details.players[3].personaname : "Anonymous"}</li>
          <li className='playerItem'>{props.details.players[4].personaname ? props.details.players[4].personaname : "Anonymous"}</li>
          <li className='playerItem'>{props.details.players[5].personaname ? props.details.players[5].personaname : "Anonymous"}</li>
          <li className='playerItem'>{props.details.players[6].personaname ? props.details.players[6].personaname : "Anonymous"}</li>
          <li className='playerItem'>{props.details.players[7].personaname ? props.details.players[7].personaname : "Anonymous"}</li>
          <li className='playerItem'>{props.details.players[8].personaname ? props.details.players[8].personaname : "Anonymous"}</li>
          <li className='playerItem'>{props.details.players[9].personaname ? props.details.players[9].personaname : "Anonymous"}</li>
        </ul>
      </div>
      </div>
    )
  }
  return <div></div>
  
}
