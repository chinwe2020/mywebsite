const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "cfwp1129",
  port: 5432,
  database: "mywebsite",
});

module.exports = pool;
