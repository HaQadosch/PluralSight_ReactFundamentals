import React, { useState } from 'react'
import './App.css'

export const App = props => {
  const [clicks, setClicks] = useState(0)

  const handleClick = _ => {
    setClicks(clicks + 1)
  }

  return (
    <div onClick={handleClick} >This div has been clicked {clicks} times.</div>
  )
}
