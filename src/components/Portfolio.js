import React from 'react'
import ProjectList from './ProjectList'

function Portfolio() {
    return (
        <section className='col p-5 backsplash rounded-1 shadow-lg'>
            <h2 className='text-center'>Portfolio</h2>
            <p className='text1 text-center'>Hover over a project to see a brief overview</p>
            <ProjectList/>
        </section>
    )
}

export default Portfolio