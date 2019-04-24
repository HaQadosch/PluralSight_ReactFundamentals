import React, { useState } from 'react'

import './AddAuthorForm.css'

export const AddAuthorForm = ({ history, onAddBookSubmit }) => {
  const [authorName, setAuthorName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [authorBooks, setAuthorBooks] = useState([''])

  const handleSubmit = evt => {
    evt.preventDefault()
    setAuthorName('')
    setImageURL('')
    onAddBookSubmit({
      name: authorName,
      imageURL,
      imageSource: 'Wikimedia Commons',
      books: authorBooks
    })
    history.push('/')
  }

  const handleBookAdd = index => ({ target: { value } }) => {
    const y = authorBooks.slice()
    y[index] = value
    setAuthorBooks(y)
  }

  const addBookEntry = _ => {
    setAuthorBooks([...authorBooks, ''])
  }

  return (
    <section>
      <header><h1>Add Author</h1></header>
      <form onSubmit={handleSubmit} >
        <fieldset>
          <legend>Author details</legend>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={authorName} onChange={({ target: { value } }) => setAuthorName(value)} />
          <label htmlFor='imageURL'>Image</label>
          <input type='url' name='imageURL' value={imageURL} onChange={({ target: { value } }) => setImageURL(value)} />
        </fieldset>
        <fieldset>
          <legend>Books</legend>
          {authorBooks.map((book, index) => <React.Fragment key={index} >
            <input type='text' name={`book${index + 1}`} placeholder={`Book ${index + 1}`} value={book} onChange={handleBookAdd(index)} />
            <button className={`button--${authorBooks.length}`} onClick={addBookEntry} ><span role='img' aria-label='add a new book'>➕ 📖👌</span></button>
          </React.Fragment>)}
        </fieldset>
        <input type='submit' value='add' />
      </form>
    </section>
  )
}
