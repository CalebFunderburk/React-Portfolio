import React from 'react'
import github from 'bootstrap-icons/icons/github.svg'
import linkedin from 'bootstrap-icons/icons/linkedin.svg'
import twitter from 'bootstrap-icons/icons/twitter.svg'

function Footer() {
    return (
        <footer className='text-center py-5'>
            <h4 className='pt-3'>Built by Caleb Funderburk</h4>
            <h5 className='text1'>calebfunderburk@icloud.com</h5>
            <a href='https://github.com/CalebFunderburk/React-Portfolio' target='_blank'><span>View this project on GitHub</span></a>
            <ul className="list-unstyled d-flex justify-content-evenly pt-3">
                <li><a href='https://github.com/CalebFunderburk' target='_blank' rel='noopener noreferrer'><img src={github} alt='GitHub icon' width='150%'/></a></li>
                <li><a href='https://www.linkedin.com/in/caleb-funderburk/' target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='LinkedIn icon' width='150%'/></a></li>
                <li><a href='https://twitter.com/CaIebTheGrey' target='_blank' rel='noopener noreferrer'><img src={twitter} alt='Twitter icon' width='150%'/></a></li>
            </ul>
        </footer>
    )
}

export default Footer