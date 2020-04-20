import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { secondsToStr } from '../utils/helpers'

const Timer = ({ getValue, resetValue, initRunning = true }) => {
  const [isRunning, setIsRunning] = useState(initRunning);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(
    () => {
      let interval = setInterval(
        () => isRunning ? setElapsedTime(elapsedTime + 1) : {},
        1000
      );
      return () => clearInterval(interval);
    },
    [isRunning, elapsedTime]
  )

  useEffect(
    () => getValue(elapsedTime),
    [elapsedTime, getValue]
  )
 
  useEffect(
    () => setElapsedTime(0),
    [resetValue]
  )

  return (
    <div className="timer-area">
      <span className="timer-numbers">{secondsToStr(elapsedTime)}</span> {' '}
      <Button 
        variant="outline-dark" 
        size="lg"
        className="timer-btn"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? <>&#10074;&#10074;</> : <>&#9654;</>}
      </Button>
    </div>
  )
}

export default Timer