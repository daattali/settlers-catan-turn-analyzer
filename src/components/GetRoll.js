import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { range } from '../utils/helpers'

const GetRoll = ({ getValue, resetValue }) => {
  const possibleRolls = range(2, 12)
  const [selectedRoll, setSelectedRoll] = useState()
  
  const rollClicked = (event) => {
    const clicked = parseInt(event.target.value)
    if (selectedRoll === clicked) {
      setSelectedRoll()
    } else {
      setSelectedRoll(clicked)
    }
  }

  useEffect(
    () => getValue(selectedRoll),
    [selectedRoll, getValue]
  )

  useEffect(
    () => setSelectedRoll(),
    [resetValue]
  )

  return (
    <div className="rolls-selection">
      {possibleRolls.map(roll => 
        <Button 
          variant="outline-dark"
          size = "md"
          key={roll} 
          onClick={rollClicked} 
          value={roll}
          className={`roll ${roll === selectedRoll ? 'active' : ''}`}
        >
          {roll}
        </Button>
      )}
    </div>
  )
}

export default GetRoll