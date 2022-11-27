import React from 'react'
import resume from '../assets/pdf/resume.pdf'

function Resume() {
    return (
        <section className='container text-center'>
            <div className='col-10 mx-auto'>
                <h4>Download my resume here</h4>
                <a href={resume} download><button type='button' className='btn btn-secondary my-3'>Download</button></a>
            </div>
        </section>
    )
}

export default Resume