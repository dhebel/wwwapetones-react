const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'www',
  password: 'Bobcats8194',
  port: 5432,
});

const getRespuesta = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT id, nombre, edad, gatos FROM gatitos ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const createRespuesta = (body) => {
  return new Promise(function(resolve, reject) {
    const { nombre, edad, gatos } = body
    pool.query('INSERT INTO gatitos (nombre, edad, gatos) VALUES ($1, $2, $3) RETURNING *', [nombre, edad, gatos], (error, results) => {
      if (error) {
        reject(error)
      }
    })
  })
}

module.exports = {
  getRespuesta,
  createRespuesta,
}