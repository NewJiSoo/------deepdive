var obj = {
    name: 'Lee',
    hi: function () {
        console.log('Hi ' + this.name);
    }
};

obj.hi(); // Hi Lee

var obj2 = {
    name: 'Kim',
    hi() {
        console.log('Hi ' + this.name);
    }
};

obj2.hi(); //Hi Kim