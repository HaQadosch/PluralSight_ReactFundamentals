import React, { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import { Hero } from './Components/Hero'
import { Turn } from './Components/Turn'
import { Continue } from './Components/Continue'
import { Footer } from './Components/Footer'
import shuffle from 'lodash.shuffle'
import sample from 'lodash.sample'

const authors = [
  {
    name: 'Mark Twain',
    imageURL: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn', 'Life on the Mississippi', 'Roughing it']
  },
  {
    name: 'Joseph Conrad',
    imageURL: 'images/authors/josephconrad.png',
    imageSource: 'Wikimedia Commons',
    books: ['Heart of Darkness']
  },
  {
    name: 'J.K. Rowling',
    imageURL: 'images/authors/jkrowling.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Daniel Ogren',
    books: ['Harry Potter and the Sorcerers Stone']
  },
  {
    name: 'Stephen King',
    imageURL: 'images/authors/stephenking.jpg',
    imageSource: 'Wikimedia Commons',
    imageAttribution: 'Pinguino',
    books: ['The Shining', 'IT']
  },
  {
    name: 'Charles Dickens',
    imageURL: 'images/authors/charlesdickens.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
  },
  {
    name: 'William Shakespeare',
    imageURL: 'images/authors/williamshakespeare.jpg',
    imageSource: 'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
  }
]

const getTurnData = authors => {
  const allBooks = authors.reduce((collection, { books }) => collection.concat(books), [])
  const random4 = shuffle(allBooks).slice(0, 4)
  const goodBook = sample(random4)
  const associatedAuthor = authors.find(author => author.books.some(title => title === goodBook))

  return {
    author: associatedAuthor,
    books: random4,
    goodBook
  }
}

let turnData = { ...getTurnData(authors) }

export const App = () => {
  const [key, setKey] = useState(0)
  const [answer, setAnswer] = useState('none')
  const reset = _ => {
    turnData = { ...getTurnData(authors) }
    setAnswer('none')
    setKey(key + 1)
  }
  const onAnswerSelected = title => {
    const isCorrect = title === turnData.goodBook
    setAnswer(isCorrect ? 'right' : 'wrong')
    if (isCorrect) {
      setTimeout(reset.bind(this), 250)
    }
  }

  return (
    <main className='container-fluid'>
      <Hero />
      <Turn key={key} {...turnData} answer={answer} onClick={onAnswerSelected} />
      <Continue />
      <Footer />
    </main>
  )
}
