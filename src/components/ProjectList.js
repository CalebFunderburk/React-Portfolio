import React from 'react'
import github from 'bootstrap-icons/icons/github.svg'
import picme from '../assets/images/picme-screenshot.png'
import notetaker from '../assets/images/notetaker-screenshot.png'
import passwizard from '../assets/images/passwizard-screenshot.png'
import onthego from '../assets/images/onthego-screenshot.png'
import chunkd from '../assets/images/chunkd-screenshot.png'
import techtalk from '../assets/images/techtalk-screenshot.png'

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
            title: 'Weather On The Go',
            link: 'https://calebfunderburk.github.io/On-The-Go/',
            repo: 'https://github.com/CalebFunderburk/On-The-Go',
            image: onthego
        },
        {
            title: 'Passwizard',
            link: 'https://calebfunderburk.github.io/Passwizard/',
            repo: 'https://github.com/CalebFunderburk/Passwizard',
            image: passwizard
        },
        {
            title: "Chunk'd",
            link: 'https://chunkd-aj.herokuapp.com/signup',
            repo: 'https://github.com/PuppetAJ/ReactMC',
            image: chunkd
        },
        {
            title: 'Tech Talk',
            link: 'https://tech-talk-0.herokuapp.com/',
            repo: 'https://github.com/CalebFunderburk/Tech-Talk',
            image: techtalk
        }
    ]

    return (
        <div className='row'>
            {projects.map(project => (
                <div className='col-12 col-lg-6 card cardfix' key={project.title}>
                    <img src={project.image} alt="A screenshot of Caleb's project" className='card-img' />
                    <div className='container card-img-overlay text-light d-flex align-items-start justify-content-end'>
                        <div className='projectarticle col-lg-4 col-sm-6 col-10 background p-1 rounded-1 text-end'>
                            <p className='card-title text1 fs-5 font-weight-bold projecttext'>{project.title}</p>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='card-text projecttext'><p>Visit Site</p></a>
                            <a href={project.repo} target='_blank' rel='noopener noreferrer'><img src={github} alt='GitHub icon' className='githublogo'/></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default ProjectList