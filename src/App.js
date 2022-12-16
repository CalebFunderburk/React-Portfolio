import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

function App() {

  const [currentPage, setCurrentPage] = useState('About')

  return (
    <>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
      {currentPage === 'About'
          ? <About/>
          : currentPage === 'Portfolio'
            ? <Portfolio/>
            : currentPage === 'Contact'
              ? <Contact/>
              : currentPage === 'Resume'
                ? <Resume/>
                // Might need to something else
                : <About/>}
      </main>
      <Footer/>
    </>
  )
}

export default App