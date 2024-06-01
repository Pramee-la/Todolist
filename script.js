const form = document.getElementById('new_task_form');
const input = document.getElementById('new_task_input');
const list_el = document.getElementById('task');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const task = input.value;

    if (!task) {
        alert('Enter any value');
    } else {
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content = document.createElement('div');
        task_content.classList.add('content');

        const task_checkbox = document.createElement('input');
        task_checkbox.type = 'checkbox';
        task_checkbox.classList.add('checkbox');

        const task_input = document.createElement('input');
        task_input.classList.add('text');
        task_input.type = 'text';
        task_input.value = task;
        task_input.setAttribute('readonly', 'readonly');

        const task_date = document.createElement('div');
        task_date.classList.add('date');
        const today = new Date();
        task_date.textContent = today.toLocaleDateString();

        task_content.appendChild(task_checkbox);
        task_content.appendChild(task_input);
        task_content.appendChild(task_date);

        task_el.appendChild(task_content);

        const task_actions = document.createElement('div');
        task_actions.classList.add('actions');

        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = 'Edit';

        const dlt = document.createElement('button');
        dlt.classList.add('dlt');
        dlt.innerHTML = 'Delete';

        task_actions.appendChild(edit);
        task_actions.appendChild(dlt);

        task_el.appendChild(task_actions);

        list_el.appendChild(task_el);

        input.value = '';

        task_checkbox.addEventListener('change', () => {
            if (task_checkbox.checked) {
                task_input.classList.add('completed');
            } else {
                task_input.classList.remove('completed');
            }
        });

        edit.addEventListener('click', () => {
            if (edit.innerHTML.toLowerCase() == 'edit') {
                edit.innerHTML = 'Save';
                task_input.removeAttribute('readonly');
                task_input.focus();
            } else {
                edit.innerHTML = 'Edit';
                task_input.setAttribute('readonly', 'readonly');
            }
        });

        dlt.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    }
});
