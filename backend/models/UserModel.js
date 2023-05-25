import {Sequelize} from "sequelize";
import database from "../config/database.js"

const { DataTypes } = Sequelize;

const user = database.define('user',{
    id_user:DataTypes.INTEGER,
    name_user:DataTypes.STRING(255),
    password_user:DataTypes.TEXT,
    email_user:DataTypes.STRING(255),
    no_user:DataTypes.STRING(255),
    img_user:DataTypes.TEXT,  
},{
    freezeTableName:true
});

export default user;

(async()=>{
    await database.sync();
})();