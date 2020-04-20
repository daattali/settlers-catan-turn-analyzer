import React from 'react'
import { padNum } from '../utils/helpers'

const StartTime = ({time}) => {
  const parsedTime =
    (time === undefined) ?
    undefined :
    `${padNum(time.getHours())}:${padNum(time.getMinutes())}`

  return (
    <div>
      Game started: {parsedTime}
    </div>
  )
}

export default StartTime