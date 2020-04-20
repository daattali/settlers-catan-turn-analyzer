import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

import Turn from './classes/Turn'
import Header from './components/Header'
import StartTime from './components/StartTime'
import Details from './components/Details'
import GetPlayers from './components/GetPlayers'
import Timer from './components/Timer'
import GetRoll from './components/GetRoll'
import DisplayTurns from './components/DisplayTurns'
import DisplayDice from './components/DisplayDice'

const App = ({ defaultPlayers }) => {
  const [ players, setPlayers] = useState([])
  const [ currentPlayer, setCurrentPlayer] = useState(0)
  const [ turns, setTurns ] = useState([])
  
  const [ startTime, setStartTime ] = useState()
  const [ showDetails, setShowDetails ] = useState(false)
  
  const [ resetTimer, setResetTimer ] = useState(0)
  const [ timer, setTimer ] = useState(0)
  const [ resetRoll, setResetRoll ] = useState(0)
  const [ roll, setRoll] = useState()

  useEffect(
    () => setStartTime(new Date()),
    [players]
  )

  const endTurn = () => {
    const prevTurn = new Turn(currentPlayer, timer, roll)
    setTurns(turns.concat(prevTurn))

    setResetRoll(resetRoll + 1)
    setResetTimer(resetTimer + 1)

    const nextPlayer = (currentPlayer + 1) % players.length
    setCurrentPlayer(nextPlayer)
  }

  return (
    <Container fluid>
      <Header />
      <Row>
        <Col md={6} xl={4}>
          <div className="main-panel">
            {players.length === 0 ?
              <GetPlayers initValue={defaultPlayers} setValue={setPlayers} /> :
              <div>
                <StartTime time={startTime} />
                <h3>{players[currentPlayer]}'s Turn</h3>
                <Timer getValue={setTimer} resetValue={resetTimer} initRunning={false} />
                <GetRoll getValue={setRoll} resetValue={resetRoll} />
                <br />
                <Button variant="primary" size="lg" onClick={() => endTurn()}><strong>End Turn</strong></Button>
              </div>
            }
          </div>

          {players.length === 0 ?
            null :
            <div className="details-section">
              <Button variant="link" onClick={() => setShowDetails(!showDetails)}>{
                showDetails ? 'Hide' : 'Show'} Turn Details
              </Button>
              {showDetails ?
                <Details turns={turns} players={players} /> :
                null
              }
            </div>
          }
        </Col>
        <Col md={6} xl={8}>
          {players.length === 0 ?
            null :
            <>
            <DisplayTurns turns={turns} players={players} currentPlayer={currentPlayer} />
            <DisplayDice turns={turns} />
            </>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default App