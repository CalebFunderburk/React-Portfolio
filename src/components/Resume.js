import React from 'react'
import resume from '../assets/pdf/resume.pdf'

function Resume() {
    return (
        <section className='container text-center'>
            <div className='col-10 mx-auto'>
                <h4>Download my resume here</h4>
                <a href={resume} download><button type='button' className='btn btn-secondary my-3'>Download</button></a>
            </div>
            <div className='py-5'>
                <h6 className='pb-5'>Profencies</h6>
                <div className='row mx-auto'>
                    <div className='col pb-5'>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Bootstrap</p>
                        <p>JavaScript</p>
                        <p>JQuery</p>
                        <p>Node.JS</p>
                        <p>Express.JS</p>
                    </div>
                    <div className='col pb-5'>
                        <p>MySQL</p>
                        <p>NoSQL</p>
                        <p>MongoDB</p>
                        <p>IndexedDB</p>
                        <p>React</p>
                        <p>Git</p>
                        <p>Heroku</p>
                    </div>
                    <h6 className='pb-3'>Skills</h6>
                    <div className='col pb-5'>
                        <p>UX/UI</p>
                        <p>Scrum</p>
                        <p>Agile</p>
                        <p>DRY</p>
                    </div>
                    <h6 className='pb-3'>Knowledge of</h6>
                    <div className='col pb-5'>
                        <p>MVC Paradigm</p>
                        <p>Client & Server Model</p>
                        <p>Test Driven Development</p>
                        <p>Object Relational Mapping</p>
                        <p>Object Oriented Programming</p>
                        <p>Progressive Web Applications</p>
                        <p>Web, Third Party, & Server-Side APIs</p>
                        <p>Structured & Non-Structured Databases</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume