import React from "react"
import Navigation from "./Navigation"
import headshot from '../assets/images/headshot.jpg'

function Header() {
    return (
        <header>
            {/* Need to handle image sizing when viewed on smaller viewports */}
            <img src={headshot} alt='A headshot of Caleb Fundeerburk' className='rounded-circle mx-auto d-block py-1' width='10%'/>
            <Navigation/>
        </header>
    )
}

export default Header