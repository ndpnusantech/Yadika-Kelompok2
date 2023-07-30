import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const penayanganFilm = database.define(
  "penayangan_film",
  {
    id:{
       primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_penayangan: DataTypes.INTEGER,
    id_film: DataTypes.STRING,
    id_lokasi: DataTypes.STRING,
    id_stokfilm: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default penayanganFilm;

(async () => {
  await database.sync();
})();
