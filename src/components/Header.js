import React from "react"

function Header(props) {

    const {
        currentPage,
        setCurrentPage
    } = props

    const options = ['About', 'Portfolio', 'Contact', 'Resume']

    return (
        <>
            <header>
                <h1 className='text-center py-5'><a href='/'>Caleb Funderburk</a></h1>
                <ul className=' list-unstyled d-flex justify-content-evenly fs-3 pb-5'>
                {options.map(option => (
                    <li className='navlink' key={option}>
                        <span 
                            onClick={() => setCurrentPage(option)}
                            className={currentPage === option && 'navActive'}
                        >
                        {option}
                        </span>
                    </li>
                ))}
            </ul>
            </header>
        </>
    )
}

export default Header