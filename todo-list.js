import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = ({todos}) => {
  const content = todos.map(item => {
    return <li key={item.id}><TodoListItem label={item.label} /></li>
  })

  return (
    <div>
      <ul>
        {content}
      </ul>
    </div>
  )
}

export default TodoList