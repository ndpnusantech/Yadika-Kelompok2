import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const tanggalPesan = database.define(
  "tanggal_pemesanan",
  {
    id:{
       primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_pemesanan: DataTypes.INTEGER,
    tanggal_pemesanan: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default tanggalPesan;

(async () => {
  await database.sync();
})();
