import React, { useState, useRef } from 'react'
import { validateEmail } from '../utils/helpers'
import emailjs from '@emailjs/browser'

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const [errorMessage, setErrorMessage] = useState('')

    const form = useRef()

    const { name, email, message } = formState

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)

            if (!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.name })
            console.log('Handle Form', formState)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!errorMessage) {
            console.log('Submit Form', formState)
        }

        emailjs.sendForm('service_1uavp69', 'template_cnfk63u', form.current, '_De088KbngfnV2iP4')
            .then((result) => {
                console.log(result.text)
                e.target.reset()
                console.log('Success')
            }, (error) => {
                console.log(error.text)
            })

    }

    return (
        <section className='container text-left backsplash rounded-1 py-5 shadow-lg'>
            <div className='col-10 mx-auto'>
                <h2 className='mb-3'>Contact me</h2>
                <p className='text1'>
                    Submitting this form will send me an email
                </p>
                <form ref={form} onSubmit={handleSubmit} action="https://formsubmit.co/calebfunderburk@icloud.com" method="POST">
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name:</label>
                        <br />
                        <input type='text' name='name' defaultValue={name} onBlur={handleChange} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email address:</label>
                        <br />
                        <input type='email' name='email' defaultValue={email} onBlur={handleChange} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='message' className='form-label'>Message:</label>
                        <br />
                        <textarea name='message' rows='5' width='20%' defaultValue={message} onBlur={handleChange} className='form-control mb-3' />
                        {errorMessage && (
                            <div>
                                <p className='text1'>{errorMessage}</p>
                            </div>
                        )}
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-dark btn-lg'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact