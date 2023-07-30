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
    id_seatFilm: {
      type: DataTypes.INTEGER,
    },
    seat_number: {
      type: DataTypes.INTEGER,
    },
    studio_film: {
      type: DataTypes.INTEGER,
    },
    id_ticket: {
      type: DataTypes.INTEGER,
    },
    id_pembayaran: {
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
