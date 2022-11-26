import React from 'react'
import headshot from '../assets/images/headshot.jpg'

function About() {
    return (
        <div className='container text-center'>
            <div className='col-10 mx-auto'>
                {/* Need to handle image sizing when viewed on smaller viewports */}
                <img src={headshot} alt='A headshot of Caleb Fundeerburk' className='rounded-circle mx-auto d-block py-1' width='10%'/>
                <h2>About me</h2>
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
        </div>
    )
}

export default About