/*
function Task ({id, text, completed, onDelete, onToggle}) {
    return (
        <div 
        onClick={() => onToggle(id)}
        style={{textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer'}}
        >
            {text}
            <button 
                onClick={(e) => {e.stopPropagation(); onDelete(id); }}>❌</button>
        </div>
    );
}

export default Task; */



function Task ({task, onDelete, onToggle}) {

    const handleClick = () => {
        onToggle(task.id);
    }

    return (
        <>
            <li className = 'task-item'>
                <p style={{textDecoration: task.completed ? 'line-through' : 'none'}}
                onClick={handleClick} className="task-text">
                    {task.text}
                </p>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </li>
        </>
    )
}

export default Task;