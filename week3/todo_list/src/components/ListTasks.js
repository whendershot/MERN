import React from 'react';

const ListTasks = (props) => {

    const makeElement = (task, index) => {
        
        //const lineThrough = task.isCompleted ? 'line-through' : 'none';
        
        return (
            <li 
                key={index} 
                style={{ textDecoration: task.isCompleted ? 'line-through' : null }}
            >
                <input type="checkbox" onChange={ () => { props.updateTask(task) } } defaultChecked={task.isCompleted} />
                {task.task}
                <button className="btn btn-warn" onClick={ () => { props.removeTask(task) } } >Delete</button>
            </li>
        );
    };

    return (
        <div className="container">
            <ul>
                { props.tasks.map( (task, index) => makeElement(task, index) )}
            </ul>
        </div>
    );
};

export default ListTasks;