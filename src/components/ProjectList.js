import React from 'react'
import github from 'bootstrap-icons/icons/github.svg'
import picme from '../assets/images/picme-screenshot.png'
import notetaker from '../assets/images/notetaker-screenshot.png'
import weathermaster from '../assets/images/weathermaster-screenshot.png'
import passwizrd from '../assets/images/passwizard-screenshot.png'
import datemaster from '../assets/images/datemaster-screenshot.png'
import vanillaportfolio from '../assets/images/vanillaportfolio-screenshot.png'

const ProjectList = () => {

    const projects = [
        {
            title: 'PicMe',
            link: 'https://picme1.herokuapp.com/',
            repo: 'https://github.com/CalebFunderburk/PicMe',
            image: picme
        },
        {
            title: 'Note Taker',
            link: 'https://note-taker-design.herokuapp.com/',
            repo: 'https://github.com/CalebFunderburk/Note-Taker',
            image: notetaker
        },
        {
            title: 'Weather Master',
            link: 'https://calebfunderburk.github.io/Weather-Master/',
            repo: 'https://github.com/CalebFunderburk/Weather-Master',
            image: weathermaster
        },
        {
            title: 'Passwizard',
            link: 'https://calebfunderburk.github.io/Passwizard/',
            repo: 'https://github.com/CalebFunderburk/Passwizard',
            image: passwizrd
        },
        {
            title: 'Date Master',
            link: 'https://calebfunderburk.github.io/Date-Master/',
            repo: 'https://github.com/CalebFunderburk/Date-Master',
            image: datemaster
        },
        {
            title: 'Vanilla Portfolio',
            link: 'https://calebfunderburk.github.io/Vanilla-Portfolio/',
            repo: 'https://github.com/CalebFunderburk/Vanilla-Portfolio',
            image: vanillaportfolio
        },
    
    ]

    return (
        <div className='col-10 mx-auto'>
            {projects.map(project => (
                <div className='card' key={project.title}>
                    <img src={project.image} alt='A screenshot of Calebs project' className='card-img'/>
                    <div className='container card-img-overlay text-light d-flex align-items-start justify-content-end text-end'>
                        <div className='col-sm-3 bg-dark p-4'>
                            <p className='card-title'>{project.title}</p>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='card-text'>Visit Site</a>
                            <br/>
                            <div className='py-2'>
                                <a href={project.repo} target='_blank' rel='noopener noreferrer'><img src={github} alt='GitHub icon' width='20%'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default ProjectList