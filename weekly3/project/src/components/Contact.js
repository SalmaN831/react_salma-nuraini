import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Contact() {
    const baseData = {
        fname: "",
        lname: "",
        email: "",
        question: ""
    }

    const [data, setData] = useState(baseData);

    const navigate = useNavigate();

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        })
        console.log("data", data)
    }

    const handleSubmit = () => {
        setData(baseData);
        alert("Nama : " + data.fname + " " + data.lname + "\n"
            + "Email : " + data.email + "\n"
            + "Pertanyaan : " + data.question)
        navigate('/')
    }

    return (
        <div>
            <Header />
            <div className='center m-5'>
                <Card style={{ width: '800px', padding: '10px' }} >
                    <Card.Body className='d-flex justify-content-between'>
                        <div style={{ width: '400px' }}>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>
                                Need to get in touch with us? Either fill out the form with your inguiry of find the <a
                                    href="www.gmail.com">departement email</a> you'd like to contact below
                            </Card.Text>
                        </div>
                        <div>
                            <Form onSubmit={handleSubmit}>
                                <div className='d-flex justify-content-between'>
                                    <Form.Group className="mb-3 me-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name='fname' value={data.fname} onChange={handleInput} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name='lname' value={data.lname} onChange={handleInput} required />
                                    </Form.Group>
                                </div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name='email' value={data.email} onChange={handleInput} required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>What can we help you with?</Form.Label>
                                    <Form.Control as='textarea' type="text" name='question' value={data.question} onChange={handleInput} required />
                                </Form.Group>
                                <Button variant="success" type="submit" className='mb-3'>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Card.Body>
                    <Link to={'/'}>Back</Link>
                </Card>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
