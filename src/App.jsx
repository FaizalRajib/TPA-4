import React from 'react'
import AppRoute from '../Route'
import Footer from './components/Footer'
import Nav from './components/Nav'


function App() {
  return (
    <div>
      <Nav />
        <AppRoute />
      <Footer />
    </div>
  )
}

export default App