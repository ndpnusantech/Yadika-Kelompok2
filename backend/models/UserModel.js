import {Sequelize} from "sequelize";
import database from "../config/database.js"

const { DataTypes } = Sequelize;

const user = database.define(
  "user",
  {
    id_user: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name_user: DataTypes.STRING,
    password_user: DataTypes.TEXT,
    email_user: DataTypes.STRING,
    no_user: DataTypes.STRING,
    img_user: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

export default user;

(async()=>{
    await database.sync();
})();