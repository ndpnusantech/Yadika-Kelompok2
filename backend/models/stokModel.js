import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const StockFilm = database.define(
  "stockFilm",
  {
    id_stokFilm: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    stockFilm: DataTypes.INTEGER
  },
  {
    freezeTableName: true,
  }
);

export default StockFilm;

(async () => {
  await database.sync();
})();
