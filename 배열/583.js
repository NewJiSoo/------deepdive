const user = [
    { id: 1, name: 'lee' },
    { id: 2, name: 'kim' },
    { id: 3, name: 'foo' },
    { id: 4, name: 'bar' },
];

user.find(user => user.id === 2); // {id:2, name:'kim'}

[1, 2, 2, 3].find(item => item === 2); // 2

user.findIndex(user => user.id === 2); // 1