
import React from "react";
import TodoTitle from "../todo-title";
import TodoSearch from "../todo-search/todo-search";
import TodoCounter from "../todo-counter/todo-counter";
import TodoList from "../todo-list/todo-list";


const App = () => {
  const todos = [
    {id: 1, label: 'drink water', important: false, done: false},
    {id: 2, label: 'drink tea', important: false, done: false},
    {id: 3, label: 'drink vodka', important: false, done: false},
  ]

  return (
    <div>
      <TodoTitle />
      <TodoSearch />
      <TodoCounter />
      <TodoList todos={todos} />
    </div>
  )
}

export default App