import React, { useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, addTodo, changeTodo, deleteTodo } from './redux/todoSlice'

function Todoapp() {
    // const [task, setTask] = useState("");

    // const [taskList, setTaskList] = useState([]);

    // const handleChange = (e) => {
    //     setTask(e.target.value);
    // };

    // const AddTask = () => {
    //     if(task !== "") {
    //         const taskDetails = {
    //             id: Math.floor(Math.random()*1000),
    //             value: task,
    //             isCompleted: false,
    //         }
    //         setTaskList([...taskList, taskDetails]);
    //     }
    // };

    // const deletetask = (e, id) => {
    //     e.preventDefault();
    //     setTaskList(taskList.filter((t) => t.id !== id));
    // };

    // const completetask = (e, id) => {
    //     e.preventDefault();
    //     const element = taskList.findIndex(elem => elem.id === id);
    //     const newTaskList = [...taskList];
    //     newTaskList[element] = {
    //         ...newTaskList[element],
    //         isCompleted: true,
    //     }
    //     setTaskList(newTaskList);
    // };

    const todos = useSelector(selectCount);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');

    return (
        <div className="center">
            <div  className="add-todo">
                <input type="text"  placeholder="Add todo.." className="input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button className="btn-submit" onClick={() =>  dispatch(addTodo({ title: newTodo, completed: false}))}>Submit</button>
            </div>
            {todos.map((item, index) => {
                return <div key={'todo' + index} className={item.completed ? "todo-complete box-list" : "list-todo box-list"}>
                    <input className="checkbox" type={'checkbox'} checked={item.completed} onChange={() => {dispatch(changeTodo(index))}} />
                    <span>{item.title}</span>
                    <button className="btn-del" onClick={() => {dispatch(deleteTodo(index))}}>Delete</button>
                </div>
            })}

            {/* {taskList !== [] ? (
            <ul className="box-list">
                {taskList.map((t) => (
                    <li className={t.isCompleted ? "task-complete" : "list-task"}>
                        <input type="checkbox" className="checkbox" onChange={(e) => completetask(e, t.id)} />
                        {t.value}
                        <button className="btn-del" onClick={(e) => deletetask(e, t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            ) : null} */}
        </div>
    )
}

export default Todoapp;