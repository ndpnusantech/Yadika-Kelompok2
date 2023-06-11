import {Sequelize} from "sequelize";
import database from "../config/database.js"

const { DataTypes } = Sequelize;

const hargaProduk = database.define('harga_produk',{
    id_hargafilm:DataTypes.INTEGER,
    weekend_film:DataTypes.STRING,
    normal_film:DataTypes.STRING,
    special_film:DataTypes.STRING,  
},{
    freezeTableName:true
});

export default hargaProduk;

(async()=>{
    await database.sync();
})();