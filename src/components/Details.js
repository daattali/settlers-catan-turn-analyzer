import React from 'react'
import ReactJson from 'react-json-view'

const Details = ({turns, players}) => {
  const parsedTurns = turns.map(({player, time, roll}) => {
    let turn = {player, time, roll}
    turn.player = players[player]
    return turn
  })

  return (
    <ReactJson src={parsedTurns} />
  )
}

export default Details