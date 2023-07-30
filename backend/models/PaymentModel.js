import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const Payment = database.define(
  "payment",
  {
    id_payment: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    no_payment: DataTypes.INTEGER,
    img_payment: DataTypes.TEXT,
    id_user: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Payment;

(async () => {
  await database.sync();
})();
