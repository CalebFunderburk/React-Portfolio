import React from 'react'
import github from 'bootstrap-icons/icons/github.svg'
import linkedin from 'bootstrap-icons/icons/linkedin.svg'
import twitter from 'bootstrap-icons/icons/twitter.svg'

function Footer() {
    return (
        <footer className='text-center'>
            <ul className="list-unstyled d-flex justify-content-evenly fs-3 py-1">
                <li><a href='https://github.com/CalebFunderburk' target='_blank'><img src={github} alt='GitHub icon' width='200%'/></a></li>
                <li><a href='https://www.linkedin.com/in/caleb-funderburk-4b6300218/' target='_blank'><img src={linkedin} alt='LinkedIn icon' width='200%'/></a></li>
                <li><a href='https://twitter.com/CaIebTheGrey' target='_blank'><img src={twitter} alt='Twitter icon' width='200%'/></a></li>
            </ul>
            <p>Built by Caleb Funderburk</p>
        </footer>
    )
}

export default Footer