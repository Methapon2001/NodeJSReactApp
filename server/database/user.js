const connection = require('./connection');

module.exports.create = async (request, response) => {
  const { id, city, username, createdByEmail } = request.body;
  await connection.query('INSERT INTO users (id, cityId, username, createdBy) VALUES (?, ?, ?, ?)', [id, city, username, createdByEmail]);
  return response.json({ id, city, username, createdByEmail });
}

module.exports.get = async (request, response) => {
  const users = await connection.query('SELECT users.*, cities.name AS city FROM users LEFT JOIN cities ON users.cityId = cities.id');
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
  const { city, username } = request.body;
  await connection.query('UPDATE users SET cityId = ?, username = ? WHERE id = ?', [city, username, id]);
  return response.json({ id, username });
}

module.exports.statistics = async (request, response) => {
  const users = await connection.query('SELECT COUNT(*) AS total FROM users');
  const usersByCity = await connection.query('SELECT cities.name AS city, COUNT(*) AS total FROM users LEFT JOIN cities ON users.cityId = cities.id GROUP BY cityId');
  const maxUsers = await connection.query('SELECT cities.name AS city, COUNT(*) AS total FROM users LEFT JOIN cities ON users.cityId = cities.id GROUP BY cityId ORDER BY total DESC LIMIT 1');
  const minUsers = await connection.query('SELECT cities.name AS city, COUNT(*) AS total FROM users LEFT JOIN cities ON users.cityId = cities.id GROUP BY cityId ORDER BY total ASC LIMIT 1');
  const data = {
    users: users[0].total,
    usersByCity: usersByCity,
    maxUsers: maxUsers[0],
    minUsers: minUsers[0],
  };
  return response.json(data);
}