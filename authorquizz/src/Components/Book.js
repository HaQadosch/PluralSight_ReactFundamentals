import React from 'react'
import './Book.css'

export const Book = ({ title, onClick }) => {
  return (
    <div className='answer' onClick={_ => onClick(title)} >
      <h4>{title}</h4>
    </div>
  )
}
