const Pool = require("pg").Pool
const pool = new Pool({
  user: "postgres",
  password: "Aynur100",
  host: "localhost",
  port: 5432,
  database: "node_postgres",
})

module.exports = pool
