import React, { useState } from 'react'
import './Turn.css'
import { Book } from './Book'

export const Turn = ({ author, books, goodBook, onClick: onAnswerSelected }) => {
  const [answer, setAnswer] = useState('none')

  function onClick (bookTitle) {
    const isCorrect = bookTitle === goodBook
    setAnswer(isCorrect ? 'right' : 'wrong')
    if (isCorrect) {
      onAnswerSelected()
    }
  }

  return (
    <div className={`row turn turn__${answer}`}>
      <div className='col-4 offset-1'>
        <img src={author.imageURL} alt='Author' className='authorImage' />
      </div>
      <div className='col-6'>{
        books.map((title, index) => <Book key={index} title={title} onClick={onClick} />)
      }</div>
    </div>
  )
}
