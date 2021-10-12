module.exports = {
  "development": {
    "username": "root",
    "password": "1234",
    /*"username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,*/
    "database": "furnituresdigitalmarket_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 3306
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
