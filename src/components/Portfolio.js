import React from 'react'
import ProjectList from './ProjectList'

function Portfolio() {
    return (
        <section className='container p-5 backsplash text-light rounded-1'>
            <h2 className='text-center mb-5'>Portfolio</h2>
            <ProjectList/>
        </section>
    )
}

export default Portfolio