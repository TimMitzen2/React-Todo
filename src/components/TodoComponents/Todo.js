import React from 'react';
import './Todo.css'

const Todo = (props) =>{
   return (
      
        <div className={`item${props.item.completed ? ' completed' : ''}` } onClick={event=> props.toggleItem(props.item.id)}>
        <p>{props.item.task}</p>
        </div>
        ) 
   
   }
export default Todo;