import { elements } from './base.js';

export const renderTasks = (task) => {
    console.log(task);

    let table_tr = document.createElement('tr');
    elements.table_tbody.appendChild(table_tr);
    
    let th_status = document.createElement('th');
    let taskID = document.createTextNode(task.id);

    th_status.appendChild(taskID);
    table_tr.appendChild(th_status);

    //

    let td_name = document.createElement('td');
    let taskName = document.createTextNode(task.task);

    td_name.appendChild(taskName);
    table_tr.appendChild(td_name)

    //

    let td_status = document.createElement('td');
    let taskStatus = document.createTextNode(task.status);

    td_status.appendChild(taskStatus);
    table_tr.appendChild(td_status);

    //

    let td_success = document.createElement('td');
    let i_success = document.createElement('i');
    i_success.classList.add('fa-solid', 'fa-check', 'me-2', 'text-success');

    td_success.appendChild(i_success);
    table_tr.appendChild(td_success);

    //
    let td_danger = document.createElement('td');
    let i_danger = document.createElement('i');
    i_danger.classList.add('fa-solid', 'fa-xmark', 'me-2', 'text-danger');

    td_danger.appendChild(i_danger);
    table_tr.appendChild(td_danger);
}