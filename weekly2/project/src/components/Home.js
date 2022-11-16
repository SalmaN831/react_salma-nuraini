import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './style.css'

function Home() {
    return (
        <div>
            <Header />
            <div className='center text-white'>
            <h1 style={{'margin-top' : '100px'}}>WELCOME TO OUR WEBSITE</h1>
            <h5>Lorem ipsum dolor sit amet</h5>
            &nbsp;
            <button className='button'>JOIN NOW</button>
        </div>
            <Footer />
        </div>
    )
}

export default Home
