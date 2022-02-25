const connection = require('./connection');

module.exports.create = async (request, response) => {
  const { id, city, username, createdByEmail } = request.body;
  await connection.query('INSERT INTO users (id, cityId, username, createdBy) VALUES (?, ?, ?, ?)', [id, city, username, createdByEmail]);
  return response.json({ id, city, username, createdByEmail });
}

module.exports.get = async (request, response) => {
  const users = await connection.query('SELECT users.id, cityId, username, createdAt, updatedAt, createdBy, cities.name AS city FROM users LEFT JOIN cities ON users.cityId = cities.id');
  console.log(users);
  return response.json(users);
}

module.exports.delete = async (request, response) => {
  const id = request.params.id;
  await connection.query('DELETE FROM users WHERE id = ?', [id]);
  return response.status(204).send();
}

module.exports.update = async (request, response) => {
  const id = request.params.id;
  const username = request.body.username;
  await connection.query('UPDATE users SET username = ? WHERE id = ?', [username, id]);
  return response.json({ id, username });
}