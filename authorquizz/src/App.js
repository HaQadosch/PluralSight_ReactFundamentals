import React from 'react'
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

  console.log({ goodBook })

  return {
    author: associatedAuthor,
    books: random4
  }
}

const turnData = { ...getTurnData(authors) }

export const App = () => {
  return (
    <main className='container-fluid'>
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </main>
  )
}
