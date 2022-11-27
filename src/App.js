import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <About/>
        <Portfolio/>
        <Contact/>
        <Resume/>
      </main>
      <Footer/>
    </>
  )
}

export default App