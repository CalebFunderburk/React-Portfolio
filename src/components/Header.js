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
                <h1 className='text-center'><a href='/'>Caleb Funderburk</a></h1>
                <ul className=' list-unstyled d-flex justify-content-evenly fs-3 py-1'>
                {options.map(option => (
                    <li className="nav" key={option}>
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