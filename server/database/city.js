const connection = require('./connection');

module.exports.get = async (request, response) => {
    const { cityId } = request.params;
    if (cityId) {
        const city = await connection.query('SELECT * FROM cities WHERE id = ?', [cityId]);
        return response.json(city[0]);
    } else {
        const cities = await connection.query('SELECT * FROM cities');
        return response.json(cities);
    }
}