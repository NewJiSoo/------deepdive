class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }
    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}