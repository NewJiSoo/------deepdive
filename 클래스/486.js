class Base { } // 수퍼(베이스/부모) 클래스
class Derived extends Base { } // 서브(파생/자식) 클래스

function Base(a) {
    this.a = a;
}

class Derived extends Base { }
const derived = new Derived(1);
console.log(derived); //Derived {a:1}