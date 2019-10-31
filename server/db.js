const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect:'postgres'           //refers to name of database, our user, and the password connected to our pg Admin
})

sequelize.authenticate()
    .then(() => console.log('postgres db is connected'))
    .catch(err => console.log(err));

module.exports = sequelize;           //add this so your other files can read it