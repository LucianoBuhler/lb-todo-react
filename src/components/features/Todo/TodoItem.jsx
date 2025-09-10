import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoItem = ({ todo, onUpdateStatus, onRemove }) => {
  const { title, description, completed } = todo;

  return (
    <div className="todo-item">
      <div className="todo-item-header">
        <h3 className={completed ? "todo-item-completed" : ""}>{title}</h3>
        <button
          className="todo-item-toggle-status-button"
          onClick={onUpdateStatus}
        >
            {completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </button>
      </div>

      <div className="todo-item-body">
        Status: {completed ? 'Completed' : 'Pending'}
        <div>{description}</div>
      </div>

      <button
        className="todo-item-remove-button"
        onClick={onRemove}
      >
        <DeleteIcon />
      </button>
    </div>
  )
}
