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

export default Task;