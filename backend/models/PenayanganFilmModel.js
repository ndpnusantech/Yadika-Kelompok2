import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const penayanganFilm = database.define(
  "penayangan_film",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_penayangan: DataTypes.INTEGER,
    id_film: DataTypes.INTEGER,
    id_lokasi: DataTypes.INTEGER,
    id_stokfilm: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default penayanganFilm;

(async () => {
  await database.sync();
})();
