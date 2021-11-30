const connection = require('./connection');

module.exports.create = async (request, response) => {
  const { id, name } = request.body;
  await connection.query('INSERT INTO users (id, username) VALUES (?, ?)', [id, name]);
  return response.json({ id, name });
}

module.exports.get = async (request, response) => {
  const users = await connection.query('SELECT * FROM users');
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
  const name = request.body.name;
  await connection.query('UPDATE users SET username = ? WHERE id = ?', [name, id]);
  return response.json({ id, name });
}