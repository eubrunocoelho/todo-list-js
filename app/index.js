import { Task } from './models/Task.js';
import { elements } from './views/base.js';
import * as taskView from './views/taskView.js';

elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskObject = new Task();
    const task = elements.input.value;

    taskObject.saveTask(task);
    taskView.renderTasks(taskObject);
});