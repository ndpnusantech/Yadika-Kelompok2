import { Sequelize } from "sequelize";
import database from "../config/database.js";

const { DataTypes } = Sequelize;

const jamTayang = database.define(
  "jamTayang",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    id_jamTayang: DataTypes.INTEGER,
    jam_film: DataTypes.TIME,
  },
  {
    freezeTableName: true,
  }
);

export default jamTayang;

(async () => {
  await database.sync();
})();
