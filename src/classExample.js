const doSomethingWith = (x) => x + x;

class C {
    static #x = 42;

    static y;

    static {
        try {
            this.y = doSomethingWith(this.#x);
        } catch (e) {
            this.y = 'unknown';
        }
    }
}

export default C;
