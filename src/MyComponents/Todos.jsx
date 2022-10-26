import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    let mystyle = {
        minHeight: "70vh",
        margin: "20px auto"
    }
    return (
        <div className="container" style={mystyle} align="center">
            <h3 className="my-3">Todo's List</h3>
            {/* //to map each element in the array i or todo is used */}
            {props.todos.length===0? "   No Todos to display":
            props.todos.map((todo)=>{
                return(
                (<TodoItem todo = {todo} key={todo.Sno} onDelete={props.onDelete}/>)
                )
            })
        }


        </div>
    )
}