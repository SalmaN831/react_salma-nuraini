import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './style.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Header />
            <div className='center text-white'>
            <h1 style={{'margin-top' : '100px'}}>WELCOME TO OUR WEBSITE</h1>
            <h5>Lorem ipsum dolor sit amet</h5>
            &nbsp;
            <Link to={'/about'}>
            <button className='button'>JOIN NOW</button>
            </Link>
        </div>
            <Footer />
        </div>
    )
}

export default Home
