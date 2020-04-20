import React from 'react'
import { Table } from 'react-bootstrap'
import { secondsToStr } from '../utils/helpers'

const DisplayTurns = ({turns, players, currentPlayer}) => {
  const cellWidthStr = `${100/players.length}%`
  const playerTurns = (player) => turns.filter(turn => turn.player === player)
  const averages = players.map((player, pid) => {
    const turns = playerTurns(pid)
    return turns.length === 0 ?
      0 :
      turns.reduce((sum, turn) => turn.time + sum, 0) / turns.length
  })

  return (
    <div className="turn-table">
      <h2>Average Turn Length</h2>
      <Table striped bordered hover size="sm" width="100%">
        <thead>
          <tr>
            {players.map((player, idx) =>
              <th 
                width={cellWidthStr} key={player} 
                className={`${idx === currentPlayer ? 'active' : ''}`}
              >
                {player}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            {averages.map((average, idx) =>
              <td width={cellWidthStr} key={idx}>{secondsToStr(average)}</td>
            )}
          </tr>    
        </tbody>
      </Table>
    </div> 
  )
}

export default DisplayTurns