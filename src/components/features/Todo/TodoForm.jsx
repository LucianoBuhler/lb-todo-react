import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

export const TodoForm = ({ onAdd }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const [newTodo, setnewTodo] = useState({
    title: '',
    description: '',
    completed: false
  });

  const titleInputRef = useRef(null);

  useEffect(() => {
    if (isExpanded && titleInputRef.current) {
      titleInputRef.current.focus()
    }
  }, [isExpanded])

  const resetNewTodo = () => {
    setnewTodo({
      title: '',
      description: '',
      completed: false
    });
    setIsExpanded(false);
  }

  const submitTodo = (event) => {
    event.preventDefault();
    if (!newTodo.title.trim() && !newTodo.description.trim) return;
    onAdd(newTodo);
    resetNewTodo();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setnewTodo({
      ...newTodo,
      [name]: value
    });
  }

  const expand = () => setIsExpanded(true);

  return (
    <>
      <form className="todo-form" onSubmit={submitTodo}>
        {isExpanded && (
          <input
            ref={titleInputRef}
            type="text"
            className={`todo-item-input ${isExpanded ? "expanded" : ""}`}
            name="title"
            value={newTodo.title}
            placeholder="Title" 
            onChange={handleChange}
          />
        )}

        <textarea
          type="text"
          name="description"
          rows={isExpanded ? 3 : 1}
          className="item-textarea"
          value={newTodo.description}
          placeholder="Take a note ..." 
          onClick={expand}
          onChange={handleChange}
        />
        <Fab type="submit" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </form>
    </>
  )
}
