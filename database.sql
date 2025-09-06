const db = require('./db');

// Fetch projects
async function getProjects(userId) {
  const [rows] = await db.query(`
    SELECT p.project_id, p.name, p.progress
    FROM projects p
    JOIN user_project up ON p.project_id = up.project_id
    WHERE up.user_id = ?
  `, [userId]);

  return rows;
}
