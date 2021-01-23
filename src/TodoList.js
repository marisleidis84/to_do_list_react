import React, { useRef, useState } from 'react';

const TodoList = () => {
    const [task, setTask] = useState([]);
    const [inputValor, setinputValor] = useState('');
    let input = useRef(null);




    const addTask = (e) => {
        if (inputValor !== '') {
            setTask(task.concat(inputValor));
            document.getElementById("prueba").value = "";
        }
    }

    return (
        <div className='container d-flex justify-content-center '>
            <div className='row'>
                <div className='col-md-12'>
                    <input id='prueba' ref={input} onChange={(e) => setinputValor(e.target.value)} />
                    <button onClick={addTask}>Agregar</button><br />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <ul>
                        {
                            task.length > 0 &&
                            task.map((valor, i) => {
                                console.log(valor)
                                return (<li key={i} className="list-group-item">{valor}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList;