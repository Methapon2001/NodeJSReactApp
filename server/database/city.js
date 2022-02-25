const connection = require('./connection');

module.exports.get = async (request, response) => {
    const cities = await connection.query('SELECT * FROM cities');
    return response.json(cities);
}