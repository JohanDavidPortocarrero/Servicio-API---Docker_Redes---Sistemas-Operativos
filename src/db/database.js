const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "root",
  username: "root",
  password: "clave",
  host: "db",
  port: 5432,
  dialect: "postgres"
})

module.exports = db;

/*database: "root",
    username: "root",
    password: "clave",
    host: "db",
    port: 5432,
    dialect: "postgres"
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },*/