import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from "./redux/todoSlice";

function Todoapp() {
    
    const title = useSelector((state) => state.todo.title);

    const dispatch = useDispatch();

    const [task, setTask] = useState("");

    const [taskList, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask({[e.target.name]: e.target.value});
    };

    const AddTask = () => {
        if(task !== "") {
            const taskDetails = {
                id: Math.floor(Math.random()*1000),
                value: task,
                isCompleted: false,
            }
            setTaskList([...taskList, taskDetails]);
        }
    };

    const deletetask = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id !== id));
    };

    const completetask = (e, id) => {
        e.preventDefault();
        const element = taskList.findIndex(elem => elem.id === id);
        const newTaskList = [...taskList];
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: true,
        }
        setTaskList(newTaskList);
    };

    return (
        <div className="center">
            <div  className="add-todo">
                <input type="text" onChange={(e) => handleChange(e)} placeholder="Add todo.." className="input" />
                <button className="button" onClick={AddTask}>Submit</button>
            </div>
            {taskList !== [] ? (
            <ul className="box-list">
                {taskList.map((t) => (
                    <li className={t.isCompleted ? "task-complete" : "list-task"}>
                        <input type="checkbox" className="checkbox" onChange={(e) => completetask(e, t.id)} />
                        {title}
                        <button className="btn-del" onClick={(e) => deletetask(e, t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            ) : null}
        </div>
    )
}

export default Todoapp;