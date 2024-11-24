class Singleton {
  static #instance: Singleton | null = null;

  constructor() {
    if (Singleton.#instance) {
      throw new Error("Singleton already constructed");
    }
  }

  static getInstance() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }
    return (Singleton.#instance = new Singleton());
  }

  sampleMethod() {
    console.log("The sample method");
  }
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton1);

singleton1.sampleMethod();
