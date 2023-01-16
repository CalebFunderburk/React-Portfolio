import React, { useState } from 'react'
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
            image: picme,
            role: 'Lead Developer',
            desc: 'MVC social media application built for photographers.',
            tech: 'JavaScript, Node, Express, Handlebars, Sequelize, Bootstrap, Heroku'
        },
        {
            title: "Chunk'd",
            link: 'https://chunkd-aj.herokuapp.com/signup',
            repo: 'https://github.com/PuppetAJ/ReactMC',
            image: chunkd,
            role: 'Backend Developer',
            desc: 'MERN stack Minecraft clone built into a social media platform.',
            tech: 'React, Express, Node, MongoDB, GraphQL, ThreeJS, JWT, Tailwind, Heroku'
        },
        {
            title: 'Tech Talk',
            link: 'https://tech-talk-0.herokuapp.com/',
            repo: 'https://github.com/CalebFunderburk/Tech-Talk',
            image: techtalk,
            role: 'Full Stack Developer',
            desc: 'MVC forum application built for trends in technology.',
            tech: 'JavaScript, Node, Express, Handlebars, Sequelize, Bootstrap, Heroku'
        },
        {
            title: 'Weather On The Go',
            link: 'https://calebfunderburk.github.io/On-The-Go/',
            repo: 'https://github.com/CalebFunderburk/On-The-Go',
            image: onthego,
            role: 'Lead Developer',
            desc: 'Open Weather API weather application.',
            tech: 'HTML, CSS, JQuery, MomentJS, Bulma'
        },
        {
            title: 'Note Taker',
            link: 'https://note-taker-design.herokuapp.com/',
            repo: 'https://github.com/CalebFunderburk/Note-Taker',
            image: notetaker,
            role: 'Full Stack Developer',
            desc: 'Simple note taking application.',
            tech: 'JavaScript, Express, Node, Heroku, Bootstrap, Heroku'
        },
        {
            title: 'Passwizard',
            link: 'https://calebfunderburk.github.io/Passwizard/',
            repo: 'https://github.com/CalebFunderburk/Passwizard',
            image: passwizard,
            role: 'Full Stack Developer',
            desc: 'Random password generator application.',
            tech: 'HTML, CSS, JavaScript'
        }
    ]

    return (
        <div className='row g-0'>
            {projects.map(project => (
                <div className='col-12 col-xxl-6 card cardfix' key={project.title}>
                    <img src={project.image} alt="A screenshot of Caleb's project" className='card-img' />
                    <div className='projectimage container card-img-overlay hover'>
                        <div className='projectarticle col-sm-4 col-8 background p-1 rounded-1 text-end border border-dark'>
                            <p className='card-title text1 fs-5 font-weight-bold projecttext'>{project.title}</p>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='card-text projecttext'><p>Visit Site</p></a>
                            <a href={project.repo} target='_blank' rel='noopener noreferrer'><img src={github} alt='GitHub icon' className='githublogo'/></a>
                        </div>
                        <div className='projectinfo col-8 mx-auto background p-1 rounded-1 text1 text-center border border-dark'>
                            <p>{project.role}</p>
                            <p>{project.desc}</p>
                            <p>{project.tech}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}



export default ProjectList