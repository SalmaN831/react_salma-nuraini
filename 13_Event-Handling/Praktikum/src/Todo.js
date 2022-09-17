import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './style.css';
import List from './List';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoItems: '',
            items: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            items : [...this.state.items, this.state.todoItems],
            todoItems : ''
        })
    }

    handleChange = (event) => {
        this.setState({
            todoItems: event.target.value
        })
    }

    render () {
        return (
            <div className='center'>
                <p className='title'>todos</p>
                <form onSubmit={this.handleSubmit} className='input'>
                    <input value={this.state.todoItems} onChange={this.handleChange} placeholder='Add todo..'></input>
                    <button className='button'>Submit</button>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }
}

export default Todo;