import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const tayangFilm = database.define(
  "tayang_film",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_tayang: {
      type: DataTypes.INTEGER,
    },
    id_jam: {
      type: DataTypes.TIME,
    },
    id_penayangan: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default tayangFilm;

(async () => {
  await database.sync();
})();
