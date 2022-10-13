import React from 'react';
import './style.css'

function List(props) {
    return (    
        props.items.map((item, index) =>
        <p key={index}> {item} </p>)
    )
}

export default List;