import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const FavFilm = database.define(
  "Fav_film",
  {
    id_FavFilm: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_user: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default FavFilm;

(async () => {
  await database.sync();
})();
