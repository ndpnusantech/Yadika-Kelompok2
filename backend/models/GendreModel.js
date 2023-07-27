import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const gendre_film = database.define(
  "gendre_film",
  {
    id:{
       primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_gendre: DataTypes.INTEGER,
    gendre_film: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default gendre_film;

(async () => {
  await database.sync();
})();
