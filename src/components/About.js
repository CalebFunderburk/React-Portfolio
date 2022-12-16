import React from 'react'
import headshot from '../assets/images/headshot.jpg'

function About() {
    return (
        <section className='container text-center py-5'>
            <div className='col-10 mx-auto backsplash text-light rounded-1 p-4'>
                {/* Need to handle image sizing when viewed on smaller viewports */}
                <img src={headshot} alt='A headshot of Caleb Funderburk' className='rounded-circle mx-auto d-block py-2 img-fluid' width='15%'/>
                <h2 className='py-2'>About me</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fusce quis metus id ante iaculis viverra. Curabitur vitae 
                    ipsum lectus. Praesent tristique felis eget enim pretium 
                    maximus. Vivamus pharetra efficitur arcu vel eleifend. 
                    Vivamus dapibus ac lectus sed consectetur. Aliquam mattis 
                    ultrices dui fringilla rutrum. Aenean a erat sed massa 
                    scelerisque consequat nec ut ipsum. Morbi vehicula vel 
                    tortor a luctus. In sed lorem dui. Vivamus rhoncus tortor 
                    vel lacus tempus consectetur. Quisque congue tincidunt 
                    scelerisque. Suspendisse nec ornare odio, ac fringilla 
                    massa. Donec volutpat lorem nisi, eget interdum nibh 
                    ullamcorper in. Curabitur sed elementum dui. Lorem ipsum 
                    dolor sit amet, consectetur adipiscing elit. Nunc venenatis 
                    justo aliquam nisl aliquet blandit.
                </p>
            </div>
        </section>
    )
}

export default About