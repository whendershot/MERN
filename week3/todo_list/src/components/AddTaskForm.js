import React, { useState } from 'react';

const AddTaskForm = (props) => {

    const [task, setTask] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const handleTask = (e) => {
        const _task = e.target.value;
        setTask(_task);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const _task = {
            "task": task,
            "isCompleted": isCompleted,
            "setIsCompleted": setIsCompleted
        };
        props.addTask(_task);
        e.target.task.value = "";
        setTask("");
    };

    return (
        <form className="container m-3" onSubmit={ (e) => handleSubmit(e) }>
            <div className="row mb-3">
                <label htmlFor="task" className="form-label col-sm-2 col-form-label">Task</label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" name="task" onChange={ (e) => handleTask(e) }/>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </div>
            {/* { errors !== "" && 
                <div className="row">
                    <div className="col">
                        <p>{errors}</p>
                    </div>
                </div>
            } */}
        </form>
    );
};

export default AddTaskForm;