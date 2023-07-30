import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const SeatFilm = database.define(
  "seatFilm",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_seatFilm: DataTypes.INTEGER,
    seat_number: DataTypes.INTEGER,
    studio_film: DataTypes.INTEGER,
    id_ticket: DataTypes.INTEGER,
    id_transaksi: {
      primaryKey: true, 
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default SeatFilm;

(async () => {
  await database.sync();
})();
