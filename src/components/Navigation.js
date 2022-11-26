import React from 'react'

function Navigation() {
    return (
        <nav>
            <h1 className='text-center'><a href='/'>Caleb Funderburk</a></h1>
            <ul className='list-unstyled d-flex justify-content-evenly fs-3 py-1'>
                <li><a href='#about'>About</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#resume'>Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navigation