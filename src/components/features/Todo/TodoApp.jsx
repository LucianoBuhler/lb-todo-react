import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { TodoItem } from "./TodoItem"
import './TodoApp.css'

export const TodoApp = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if(!todo.title) return;

    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  const toggleTodoStatus = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <TodoForm onAdd={addTodo}/>
      <div className="todo-items">
        {
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onUpdateStatus={() => toggleTodoStatus(todo.id)}
              onRemove={() => removeTodo(todo.id)}
            />
          ))
        }
      </div>
    </div>
  )
}
