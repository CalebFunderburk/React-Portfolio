import React from 'react'
import resume from '../assets/pdf/resume.pdf'

function Resume() {
    return (
        <section className='text-center p-5 backsplash rounded-1 shadow-lg'>
            <div className='col-10 mx-auto'>
                <h2>Download my resume here</h2>
                <a href={resume} download><button type='button' className='btn btn-dark my-3'>Download</button></a>
            </div>
            <div className='py-5'>
                <h3 className='pb-5'><u>Proficiencies</u></h3>
                <div className='row mx-auto'>
                    <div className='col pb-5 text1'>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Bootstrap</p>
                        <p>JavaScript</p>
                        <p>JQuery</p>
                        <p>Node.JS</p>
                        <p>Express.JS</p>
                    </div>
                    <div className='col pb-5 text1'>
                        <p>MySQL</p>
                        <p>NoSQL</p>
                        <p>MongoDB</p>
                        <p>IndexedDB</p>
                        <p>React</p>
                        <p>Git</p>
                        <p>Heroku</p>
                    </div>
                    <h3 className='pb-3'><u>Skills</u></h3>
                    <div className='col pb-5 text1'>
                        <p>UX/UI</p>
                        <p>Scrum</p>
                        <p>Agile</p>
                        <p>DRY</p>
                    </div>
                    <h3 className='pb-3'><u>Knowledge of</u></h3>
                    <div className='col pb-5 text1'>
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