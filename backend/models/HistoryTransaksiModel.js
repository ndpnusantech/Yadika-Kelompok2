import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const historyTrans = database.define(
  "history_transaksi",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_film: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
    id_hargafilm: DataTypes.DECIMAL,
    id_jamtayang: DataTypes.TIME,
    tanggal_film: DataTypes.DATE,
    tanggal_pemesanan: DataTypes.DATE,
    id_lokasi: DataTypes.INTEGER,
    studio_film: DataTypes.STRING,
    status_film: DataTypes.STRING,
    seats_film: DataTypes.STRING,
    code_pemesanan: DataTypes.STRING,
    pembayaran_film: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default historyTrans;

(async () => {
  await database.sync();
})();
