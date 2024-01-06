// 수퍼(베이스/부모) 클래스
class Base {
    constructor() { }
}

// 서브(파생/자식) 클래스
class Derived extends Base {
    constructor(...args) { super(...args); }
}

const derived = new Derived();
console.log(derived); //Derived {}