import { Task as TaskObject } from './Model/Task.js'
import { elements } from './View/base.js'
import * as renderTask from './View/renderTask.js'

elements.form.addEventListener('submit', (e) => {
    e.preventDefault()

    const taskInput = elements.taskInput.value

    if (taskInput !== '') {
        const taskObject = new TaskObject(0, taskInput, 0)

        const taskItem = {
            taskId: taskObject.getId(),
            task: taskObject.getTask(),
            taskStatus: taskObject.getStatus()
        }
            
        renderTask.render(taskItem);
    }
});