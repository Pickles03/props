import {useState} from 'react';

function AddTaskForm ({onAdd}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input type="text" placeholder="New task" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add task</button>
        </form>
    );
}

export default AddTaskForm;