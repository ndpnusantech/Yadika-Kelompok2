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
    tanggal_pemesanan: DataTypes.STRING,
    id_user: DataTypes.STRING,
    id_penayangan: DataTypes.STRING,
    id_seats: DataTypes.INTEGER,
    id_lokasi: DataTypes.STRING,
    id_jam: DataTypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

export default pemesanan;

(async () => {
  await database.sync();
})();
