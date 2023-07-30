import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const pembayaran = database.define(
  "pembayaran_film",
  {
    id:{
       primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_pembayaran: DataTypes.INTEGER,
    pembayaran_film: DataTypes.DATE,
    bukti_pembayaran: DataTypes.TEXT,
    status_pembayaran: DataTypes.STRING,
    id_payment: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default pembayaran;

(async () => {
  await database.sync();
})();
