import React from 'react'
import { BarChart, Tooltip, Bar, XAxis, YAxis } from 'recharts';
import { range } from '../utils/helpers'

const DisplayDice = ({turns}) => {
  const possibleRolls = range(2, 12)
  const rollsData = possibleRolls.map(roll => { 
    const freq = turns.filter(turn => turn.roll === roll).length
    return {'roll' : roll, 'freq' : freq}
  })

  return (
  <div>
    <h2>Dice Rolls</h2>
    <BarChart width={500} height={250} data={rollsData}>
    <Tooltip />
    <Bar dataKey='freq' fill='#8884d8'/>
    <XAxis dataKey='roll' />
    <YAxis />
    </BarChart>
  </div>
  )
}

export default DisplayDice