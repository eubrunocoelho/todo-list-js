import { elements } from './base.js'

export const render = (task) => {
    const taskMarkup = {
        tableRow: `
            <tr class="align-middle">
            </tr>
        `,
        taskId: `
            <th>${task.taskId}</th>
        `,
        task: `
            <td>
                <span class="text-warning">${task.task}</span>
            </td>
        `,
        taskStatus: `  
            <td>
                <span class="text-warning">${task.taskStatus}</span>
            </td>
        `,
        taskActions: `
            <td>
                <i class="fa-solid fa-check me-2 text-success"></i><a href="#" class="link-success">Feito</a>
            </td>
            <td>
                <i class="fa-solid fa-xmark me-2 text-danger"></i><a href="#" class="link-danger">Remover</a>
            </td>
        `
    }

    elements.taskBody.insertAdjacentHTML('afterbegin', taskMarkup.tableRow)
    
    const tableRow = elements.taskBody.querySelector('tr')

    if (tableRow !== null) {
        tableRow.insertAdjacentHTML('beforeend', taskMarkup.taskId)
        tableRow.insertAdjacentHTML('beforeend', taskMarkup.task)
        tableRow.insertAdjacentHTML('beforeend', taskMarkup.taskStatus)
        tableRow.insertAdjacentHTML('beforeend', taskMarkup.taskActions)
    }
}