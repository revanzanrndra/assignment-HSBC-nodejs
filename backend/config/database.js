import {Sequelize} from "sequelize";

const db = new Sequelize('bacabaca_db','root',null,{
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

export default db;