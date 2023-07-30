import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const lokasi_film = database.define(
  "lokasi_film",
  {
    id_lokasi: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    lokasi_film: DataTypes.STRING,
    stokfilm: DataTypes.INTEGER,
    id_jamtayang: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default lokasi_film;

(async () => {
  await database.sync();
})();
