import { Sequelize } from "sequelize";

const database = new Sequelize ('cinemavii_db','root','',{
    host: "localhost",
    dialect: "mysql"
})

export default database       