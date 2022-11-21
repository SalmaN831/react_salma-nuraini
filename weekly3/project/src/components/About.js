import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import './style.css'
import foto from './foto.jpg'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios'

function About() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [teamData, setTeamData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const teamData = { id, name };
        axios
            .post(`https://6362193f7521369cd06490fe.mockapi.io/team`, teamData)
            .then((res) => {
                alert('Berhasil ditambahkan')
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        axios
            .get(`https://6362193f7521369cd06490fe.mockapi.io/team`)
            .then((res) => {
                setTeamData(res.data);
            })
            .catch((err) =>
                console.log(err));
    }, [])

    return (
        <div>
            <Header />
            <div className='center'>
                <div className='center about'>
                    <h1 className='mb-5'>About Us</h1>
                    <img src={foto} alt='foto' style={{ width: '700px' }} className='mb-3'></img>
                    <div style={{ width: '700px' }}>
                        <p align="justify">
                            We're fully distributed team of 85 people living and working in 15 countries around the world.
                            And we're working to build the best products to help our customers build their brands and grow
                            their businesses on social media.
                        </p>
                        <p align="justify">
                            We've always airned to do things a little differently at Buffer. Since the early days, we've had
                            a focus on building one of the most unique and fulfilling workplace by rethinking a lot of
                            traditionalpractices
                        </p>
                        <Link to={'/'}>Back</Link>
                    </div>
                </div>
                <div className='center about'>
                    <h1 className='mb-5'>Our Team</h1>
                    <form onSubmit={handleSubmit} className='d-flex justify-content-between'>
                        <div className='form-group me-3'>
                            <input className='form-control' required value={name} onChange={e => setName(e.target.value)} placeholder='Nama'/>
                        </div>
                        <button className='btn btn-success' type='submit'>Simpan</button>
                    </form>
                    <div className='m-5'>
                    <div className='d-flex justify-content-start flex-wrap'>
                        {teamData && teamData.map(item => (
                            <Card style={{ width: '10rem', margin: '5px'}}>
                                <Card.Img variant="top" src={item.avatar} />
                                <Card.Body>
                                    <Card.Title>{item.id} : {item.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
