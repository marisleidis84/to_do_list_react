import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
    const [task, setTask] = useState([]);
    const [inputValor, setinputValor] = useState('');

    const addTask = () => {
        if (inputValor !== '') {
            setTask(task.concat(inputValor));
        }
        document.getElementById("prueba").value = '';
    }

    const trash = y => {
        const newTasks = [...task];
        newTasks.splice(y, 1);
        setTask(newTasks);
    }

    return (
        <>
            <div className='container d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-12'>
                        <input id='prueba' onChange={(e) => setinputValor(e.target.value)} />
                        <button type='button' onClick={addTask} >Agregar </button>
                    </div>
                </div>
            </div>
            <div className='container d-flex justify-content-start'>
                <div className='row'>
                    <div className='col-md-12'>
                        <ul>
                            {
                                task.length > 0 &&
                                task.map((valor, i) => {
                                    return (
                                        <div className='row border'>
                                            <li id="task" key={i} className="list-group-item border-0">{valor}</li>
                                            <i className='fas fa-trash-alt mt-3 ml-4 mr-4' onClick={() => trash(i)} style={{ cursor: 'pointer' }}></i>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList;