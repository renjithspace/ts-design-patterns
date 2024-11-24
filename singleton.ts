class Singleton {
  static #instance: Singleton | null = null;

  constructor() {
    if (Singleton.#instance) {
      throw new Error("Singleton already constructed");
    }
  }

  static getInstance(): Singleton {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }
    Singleton.#instance = new Singleton();
    return Singleton.#instance;
  }

  sampleMethod() {
    console.log("A sample method");
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2);

singleton1.sampleMethod();
