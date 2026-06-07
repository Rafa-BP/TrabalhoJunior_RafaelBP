const { Pool } = require('pg');

module.exports = new Pool({
  host: process.env.host,
  user: process.env.user,
  database: "",
  password: "",
  port: process.env.dbport
});