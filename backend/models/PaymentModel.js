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
    no_payment: {
      type: DataTypes.INTEGER,
    },
    img_payment: {
      type: DataTypes.TEXT,
    },
    id_user: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Payment;

(async () => {
  try {
    await database.sync();
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
})();
