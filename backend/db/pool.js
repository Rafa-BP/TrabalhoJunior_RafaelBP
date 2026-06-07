import { Pool } from 'pg'

console.log(process.env)

export default new Pool({
  host: process.env.host,
  user: process.env.user,
  database: "cadastros",
  password: process.env.DATABASE_PASSWORD,
  port: process.env.dbport
});