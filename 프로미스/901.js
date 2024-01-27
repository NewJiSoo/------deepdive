request.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(todos => console.log(todos))
    .catch(err => console.error(err));
// {userId: 1, id: 1, title: "delectus aut autem", completed: false}




request.post('https://jsonplaceholder.typicode.com/todos', {
    userId: 1,
    title: 'JavaScript',
    completed: false
}).then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
})
    .then(todos => console.log(todos))
    .catch(err => console.error(err));
// {userId: 1, title: "JavaScript", completed: false, id: 201}





request.patch('https://jsonplaceholder.typicode.com/todos/1', {
    completed: true
}).then(response => {
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
})
    .then(todos => console.log(todos))
    .catch(err => console.error(err));
// {userId: 1, id: 1, title: "delectus aut autem", completed: true}




request.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(todos => console.log(todos))
    .catch(err => console.error(err));
// {}