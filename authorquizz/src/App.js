import React from 'react'
import './App.css'
import './bootstrap.min.css'
import { Hero } from './Components/Hero'
import { Turn } from './Components/Turn'
import { Continue } from './Components/Continue'
import { Footer } from './Components/Footer'

export const App = () => {
  return (
    <main className='container-fluid'>
      <Hero />
      <Turn />
      <Continue />
      <Footer />
    </main>
  )
}
