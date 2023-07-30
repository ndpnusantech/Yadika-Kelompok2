import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const pemesanan = database.define(
  "pemesanan_film",
  {
    id:{
       primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_pemesanan: DataTypes.INTEGER,
    code_pemesanan: DataTypes.STRING,
    tanggal_pemesanan: DataTypes.DATE,
    id_user: DataTypes.INTEGER,
    id_penayangan: DataTypes.INTEGER,
    id_seats: DataTypes.INTEGER,
    id_lokasi: DataTypes.INTEGER,
    id_jam: DataTypes.TIME,
  },
  {
    freezeTableName: true,
  }
);

export default pemesanan;

(async () => {
  await database.sync();
})();
