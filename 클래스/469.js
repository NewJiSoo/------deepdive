class Person {
    constructor(name) {
        // 1. 암묵적으로 인스턴스가 생성, this에 바인딩
        console.log(this) // Person{}
        console.log(Object.getPrototypeOf(this) === Person.prototype); // ture

        //2. this에 바인딩되어 있는 인스턴스 초기화
        this.name = name;

        // 3. 완성된 인스턴스가 바인딩된 this 암묵적 반환
    }
}