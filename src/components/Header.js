import React, { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Header(props) {

    const {
        currentPage,
        setCurrentPage
    } = props

    const options = ['About', 'Portfolio', 'Contact', 'Resume']

    const navRef = useRef()

    const toggleNavBar = () => {

        navRef.current.classList.toggle('responsive_nav')

    }

    return (
        <>
            <header className='backsplash mx-auto col-12 rounded-1 shadow'>
                <h1 className='text-center py-5'>Caleb Funderburk</h1>
                <nav className='text-center'>
                    <ul ref={navRef} className='list-unstyled d-flex justify-content-evenly fs-3 pb-5'>
                    <button className='exitnav btn btn-lg btn-dark' onClick={toggleNavBar}>
                        <FaTimes/>
                    </button>
                    {options.map(option => (
                        <li className='navlink' key={option} onClick={toggleNavBar}>
                            <span 
                                onClick={() => setCurrentPage(option)}
                                className={currentPage === option && 'navActive'}
                            >
                            {option}
                            </span>
                        </li>
                    ))}
                    </ul>
                </nav>
                <div className='text-center'>
                    <button className='enternav btn btn-lg btn-dark mb-3' onClick={toggleNavBar}>
                        <FaBars/>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header