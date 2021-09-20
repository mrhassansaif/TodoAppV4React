import React from 'react'
import { useState } from "react";


export default function TodoBody() {

    const [todos, setTodos] = useState('');
    const [newTodo, setNewTodo] = useState([]);

    const todoEvent = (event) => {
        setTodos(event.target.value)
    }

    const get_update = () => {
        setNewTodo((prevTodo) => {
            return [...prevTodo, todos]
        })

        setTodos(' ')
        document.getElementById("title").value = ""
    }

    return (
        <>
            <div>
                <div className="form">
                    <div className="form-group">
                        <label for="title">Task</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="emailHelp"
                            onChange={todoEvent}
                        />
                    </div>
                    <button
                        type="submit"
                        id="additem"
                        onClick={get_update}
                        className="btn btn-outline-success btn-rounded waves-effect"
                        style={{ fontSize: "18px" }}


                    >
                        Add item &nbsp; &nbsp;<i className="fas fa-plus-square pr-2"></i>
                    </button>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Task</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">

                        {

                            newTodo.map((val, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{val}</td>
                                        <td><button type="submit" class="btn btn-outline-danger btn-rounded waves-effect"
                                        >
                                            Delete &nbsp; &nbsp;<i class="fas fa-trash pr-2"></i>
                                        </button></td>
                                    </tr>)
                            })
                        }


                        {/* {todos.map((element, index) => (

                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{element[0]}</td>
                                <td>{element[1]}</td>
                                <td><button type="submit" class="btn btn-outline-danger btn-rounded waves-effect"
                                >
                                    Delete &nbsp; &nbsp;<i class="fas fa-trash pr-2"></i>
                                </button></td>
                            </tr> */}

                    </tbody>
                </table>
            </div>
        </>
    )
}
