import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai'

function Products() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                api_key: 'a8cfcb84b80625cd5fd2e5a7e1b89012'
            }
        }).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    return (
        <div>
            <Header />
            <h1 className='center text-white'>List Movies</h1>
            <div className='d-flex justify-content-start flex-wrap m-5'>
                {movies.map((item, index) => {
                    return (
                        <Card style={{ width: '18rem', margin: '10px' }} key={index}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold'}}>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.overview}
                                </Card.Text>
                                <Card.Text><AiFillStar style={{color: 'yellow'}}/> {item.vote_average}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
                }
            </div>
            <Footer />
        </div>
    )
}

export default Products
