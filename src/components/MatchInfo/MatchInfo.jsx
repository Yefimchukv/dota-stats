import React from 'react'

export default function MatchInfo(props) {

  if (props.details !== undefined) {
    console.log(props.details.players)
    const matchDate = new Date(props.details.start_time * 1000);
    const isRadiantWin = props.details.radiant_win;
    

    return (
      <div>
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
    )
  }
  return <div></div>
  
}
