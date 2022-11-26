import React from 'react'

function Navigation() {
    return (
        <nav>
            <h1 className='text-center'><a href='/'>Caleb Funderburk</a></h1>
            <ul className='list-unstyled d-flex justify-content-evenly fs-3 py-1'>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </nav>
    )
}

export default Navigation