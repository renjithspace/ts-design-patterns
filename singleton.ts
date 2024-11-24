class DatabaseConnection {
  static #instance: DatabaseConnection | null = null;

  constructor() {
    if (DatabaseConnection.#instance) {
      throw new Error("A database connection already exists.");
    }
  }

  static create(): DatabaseConnection {
    if (DatabaseConnection.#instance) {
      return DatabaseConnection.#instance;
    }
    DatabaseConnection.#instance = new DatabaseConnection();
    return DatabaseConnection.#instance;
  }

  isActive() {
    return DatabaseConnection.#instance !== null;
  }
}

const connection1 = DatabaseConnection.create();
const connection2 = DatabaseConnection.create();

console.log(connection1 === connection2);

console.log(connection1.isActive());
