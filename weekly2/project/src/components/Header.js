import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='text-white'>
            <h2>Space App</h2>
            <nav>
                <ul className='nav_links'>
                    <li><Link to={'/'} className='text-white'>Home</Link></li>
                    <li><Link to={'/'} className='text-white'>Product</Link></li>
                    <li><Link to={'/about'} className='text-white'>About</Link></li>
                    <li><Link to={'/contact'} className='text-white'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
