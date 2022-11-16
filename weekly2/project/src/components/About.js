import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './style.css'
import foto from './foto.jpg'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <Header />
            <div className='center'>
                <div className='center about'>
                    <h1 className='mb-5'>About Us</h1>
                    <img src={foto} alt='foto' style={{ width: '700px' }} className='mb-3'></img>
                    <div style={{ width: '700px' }}>
                        <p>
                            We're fully distributed team of 85 people living and working in 15 countries around the world.
                            And we're working to build the best products to help our customers build their brands and grow
                            their businesses on social media.
                        </p>
                        <p>
                            We've always airned to do things a little differently at Buffer. Since the early days, we've had
                            a focus on building one of the most unique and fulfilling workplace by rethinking a lot of 
                            traditionalpractices
                        </p>
                        <Link to={'/'}>Back</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
