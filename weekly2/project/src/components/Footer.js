import React from 'react'
import './style.css'
import { TbPlanet } from 'react-icons/tb'
import { BiHome } from 'react-icons/bi'
import { BiPhone } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <footer>
                <h1><TbPlanet/> SPACE APP</h1>
                <div>
                    <h2>Contact</h2>
                    <p><BiHome /> Mojokerto, Jawa Timur</p>
                    <p><BiPhone /> 085804877619</p>
                    <div class="icon-sosmed">
                        <a href="https://www.instagram.com/ssalma28/" className='text-white'><FaInstagram size={20}/></a>
                        <a href="https://github.com/SalmaN831"  className='text-white'><FaGithub size={20}/></a>
                        <a href="https://www.linkedin.com/in/salma-nuraini/"  className='text-white'><FaLinkedin size={20}/></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
