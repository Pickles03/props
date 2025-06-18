import {useState} from 'react';

function AddTaskForm({onAdd}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() //this prevents the default form submission behavior, which would cause a page reload
        onAdd(text) //call the onAdd function passed as a prop with the current text value
        setText('') //clear the input field after adding the task
    } 

    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="New Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button>Add</button>
        </form>
    )
}

export default AddTaskForm; //all of these components as well as .jsx docs in general should start with a capital letter



/*

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

*/