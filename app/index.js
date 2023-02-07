import { Task } from './Model/Task.js';
import { elements } from './View/base.js';
import * as renderTask from './View/renderTask.js';

elements.form.addEventListener('submit', (e) => { 
    e.preventDefault();

    const task = elements.taskInput.value;
    const TaskObject = new Task(0, task, 0);

    const taskArray = [TaskObject.getId(), TaskObject.getTask(), TaskObject.getStatus()];
    console.log(taskArray);
});