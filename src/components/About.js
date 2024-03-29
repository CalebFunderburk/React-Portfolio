import React from 'react'
import headshot from '../assets/images/headshot.jpg'

function About() {
    return (
        <section className='py-5'>
            <div className='col mx-auto backsplash text-light rounded-1 p-4 shadow-lg'>
                {/* Need to handle image sizing when viewed on smaller viewports */}
                <img src={headshot} alt='A head shot of Caleb Funderburk' className='rounded-circle mx-auto d-block py-2 img-fluid'/>
                <h2 className='py-2 text-center'>About me</h2>
                <p className='text1 text-left py-5 indent p-3 rounded-1 shadow-lg border border-dark'> 
                    I am a Full Stack Developer with one year of experience. I love working with 
                    code both on the front-end and the back-end. I currently work with a variety
                    of languages commonly associated with the MERN stack. I have worked on many 
                    projects both solo and on a team. I really enjoy with other developers, combining
                    minds to create something you wouldn't normally be able to make alone is very 
                    inspiring. Outside of the 6 month boot camp I attended to expand my knowledge on 
                    Full Stack Web Development, I have spent an additional 6 months refining my skills
                    and staying up to date on recent changes in technologies and expanding my skill set. 
                    In the ever expanding world that is tech, I find it extremely important to have a 
                    passion for learning and a standard to relevant. 
                    <p className='pt-5 text-center text1 revertindent'>Thank you, feel free to reach out or download my resume!</p>
                </p>
            </div>
        </section>
    )
}

export default About