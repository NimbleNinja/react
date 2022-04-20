const url = 'https://6230a0d6f113bfceed572660.mockapi.io/todolist/tasks';

export const fetchTasks = () => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error while getting data from server');
    }
  });
};

export const postTaskOnServer = task => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error while create task on server');
    }
  });
};

export const putTaskOnServer = (id, task) => {
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  });
};

export const deleteTaskFromServer = id => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
};
