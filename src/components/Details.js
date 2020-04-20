import React from 'react'

const Details = ({turns, players}) => {
  const parsedTurns = turns.map(({player, time, roll}) => {
    let turn = {player, time, roll}
    turn.player = players[player]
    return turn
  })

  return (
    <div>
    {turns.map(turn =>
      <div key={turn.id}>
        {turn.id}. {' '}
        <strong>{players[turn.player]}</strong> {' '}
        took {turn.time} seconds {' '}
        {turn.roll === undefined ? null : `(rolled ${turn.roll})`}
      </div>
    )}
    </div>
  )
}

export default Details