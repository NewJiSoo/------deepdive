const person = {
    fist: 'Gogo',
    last: 'Lee',

    //getter 함수
    get fullName() {
        return `${this.fist} ${this.last}`
    },

    //setter 함수
    set fullName(name) {
        [this.fist, this.last] = name.split(' ');
    }
};

console.log(person.fullName);