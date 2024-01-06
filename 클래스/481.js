class MyMath {
    // static public 필드
    static PI = 22 / 7;

    // static private 필드
    static #num = 10;

    // static 메서드
    static increment() {
        return ++MyMath.#num;
    }
}