import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'

const GetPlayers = ({initValue = '', setValue}) => {
  const [ players, setPlayers] = useState(initValue)
  const parseNames = (names) =>
    names
      .split(",")
      .map(name => name.trim())
      .filter(name => name !== "")

  return (
    <div>
      <Form.Group>
      <Form.Label>Enter player names <strong>in order of play</strong>, comma-separated</Form.Label>
      <Form.Control type="text" value={players} onChange={event => setPlayers(event.target.value)} />
      </Form.Group>
      <Button variant="primary" size="lg" onClick={() => setValue(parseNames(players))}>Start!</Button>
    </div>
  )
}

export default GetPlayers