import React from 'react'
import './Turn.css'
import { Book } from './Book'

export const Turn = ({ author, books }) => {
  return (
    <div className='row turn'>
      <div className='col-4 offset-1'>
        <img src={author.imageURL} alt='Author' className='authorImage' />
      </div>
      <div className='col-6'>{
        books.map((title, index) => <Book key={index} title={title} />)
      }</div>
    </div>
  )
}
