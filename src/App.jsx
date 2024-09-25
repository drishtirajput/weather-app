import React from 'react'
import Header from './components/Header'
import Home from './components/Home'

export default function App() {
  return (
    <div>
      <Header />
      <div className='w-[75%] mx-auto'>
      <Home />
      </div>
    </div>
  )
}
