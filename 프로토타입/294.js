const person = {
    name: 'Lee',
    age: '20'
}

const circle = {
    radius: 5, // 반지름 - 상태를 나타내는 데이터

    getDiameter() {
        return 2 * this.radius;
    }
}
console.log(circle.getDiameter()); // 10