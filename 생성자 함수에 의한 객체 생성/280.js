function Circle(radius) {
    if (!new.target) {
        // new 연산자와 함꼐 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}
// new 연산자 없이 생성자 함수를 호출해도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
