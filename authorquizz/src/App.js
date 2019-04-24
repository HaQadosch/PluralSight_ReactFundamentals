import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import shuffle from 'lodash.shuffle'
import sample from 'lodash.sample'
import { Continue } from './Components/Continue'
import { Footer } from './Components/Footer'
import { Hero } from './Components/Hero'
import { Turn } from './Components/Turn'
import { AddAuthorForm } from './Components/AddAuthorForm'

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

export const App = () => {
  const [key, setKey] = useState(0)
  const library = authors
  let turnData = { ...getTurnData(library) }

  const onAnswerSelected = _ => {
    function reset () {
      turnData = { ...getTurnData(library) }
      setKey(key + 1)
    }
    setTimeout(reset, 250)
  }

  const onAddBookSubmit = newAuthorEntry => {
    library.concat(newAuthorEntry)
  }

  return (
    <main className='container-fluid'>
      <Router>
        <Route path='/' component={Hero} />
        <Switch>
          <Route path='/add' render={props => <AddAuthorForm {...props} onAddBookSubmit={onAddBookSubmit} />} />
          <Route path='/' render={_ => <Turn key={key} {...turnData} onClick={onAnswerSelected} />} />
        </Switch>
        <Route path='/' component={Continue} />
        <Route exact path='/' render={_ => <Link to='/add'>Add an author</Link>} />
        <Route path='/' component={Footer} />
      </Router>
    </main>
  )
}
