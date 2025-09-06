const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Mayank@01', 
  database: 'hack',         
});

module.exports = db;
(async () => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('DB Test Result:', rows);
  } catch (err) {
    console.error('DB Connection Failed:', err);
  }
})();
