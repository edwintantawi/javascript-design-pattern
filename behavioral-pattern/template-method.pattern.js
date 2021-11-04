class DataStore {
  constructor() {
    // this.constructor.name will be references to class name
    if (this.constructor.name === 'DataStore') {
      throw new Error('DataStore is abstract and need to be implemented');
    }
  }

  connect() {
    throw new Error('method not implemented');
  }

  query(query) {
    throw new Error('method not implemented');
  }

  disconnect() {
    throw new Error('method not implemented');
  }

  process(query) {
    this.connect();
    const result = this.query(query);
    this.disconnect();
    return result;
  }
}

class MySQLDataStore extends DataStore {
  connect() {
    console.log('mysql connect step');
  }

  query(query) {
    console.log(`mysql execute query: ${query}`);
    return ['some data'];
  }

  disconnect() {
    console.log('mysql disconnect step');
  }
}

class PostgreSQLDataStore extends DataStore {
  connect() {
    console.log('postgresql connect step');
  }

  query(query) {
    console.log(`postgresql execute query: ${query}`);
    return ['some data'];
  }

  disconnect() {
    console.log('postgresql disconnect step');
  }
}

const mySQLDataStore = new MySQLDataStore();
const postgreSQLDataStore = new PostgreSQLDataStore();

mySQLDataStore.process('SELECT * FROM users');
postgreSQLDataStore.process('SELECT * FROM users');
