import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers'

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const { name, email, message } = formState

    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            console.log(isValid)

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

        setFormState({ ...formState, [e.target.name]: e.target.value })

        if (!errorMessage) {
            setFormState({  ...formState, [e.target.name]: e.target.name })
        }
    }

    function  handleSubmit(e) {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <section className='container text-left'>
            <div className='col-10 mx-auto'>
                <h3 className='mb-3'>Contact me</h3>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name:</label>
                        <br/>
                        <input type='text' name='name' defaultValue={name} onBlur={handleChange} className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email address:</label>
                        <br/>
                        <input type='email' name='email' defaultValue={email} onBlur={handleChange} className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='message' className='form-label'>Message:</label>
                        <br/>
                        <textarea name='message' rows='5' width='20%' defaultValue={message} onBlur={handleChange} className='form-control mb-3'/>
                        {errorMessage && (
                        <div>
                            <p>{errorMessage}</p>
                        </div>
                        )}
                    </div>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact