import React, { useState } from 'react';

import AddTaskForm from './AddTaskForm';
import ListTasks from './ListTasks'

const Tasker = (props) => {

    const [taskArr, setTaskArr] = useState([]);

    const addTask = (task) => {
        const _task = {...task, "id": taskArr.length };
        setTaskArr( (_arr) => [..._arr, _task]);
    };

    const updateTask = (task) => {
        setTaskArr( 
            taskArr.map( (i) => { return i.id === task.id ? {...i, isCompleted: !i.isCompleted} : i; } )
        );
    }

    const removeTask = (task) => {
        setTaskArr( 
            taskArr.filter( (i) => i.id !== task.id )
        );
    };

    return (
        <>
            <AddTaskForm addTask={addTask} />
            <ListTasks tasks={taskArr} removeTask={removeTask} updateTask={updateTask} />
        </>
    );
};

export default Tasker;