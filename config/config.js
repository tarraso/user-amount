require('dotenv').config({ path: `${process.cwd()}/.env`})
module.exports = {
  "development": {
    "dialect": "postgres",
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "modelsPath": "src/models"
  },
  "test": {
    "dialect": "postgres",
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "modelsPath": "src/models",
  },
  "production": {
    "dialect": "postgres",
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "modelsPath": "src/models"
  }
}
