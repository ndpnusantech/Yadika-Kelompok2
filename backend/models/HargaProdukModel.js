import {Sequelize} from "sequelize";
import database from "../config/database.js"

const { DataTypes } = Sequelize;


const hargaProduk = database.define('harga_produk',{
    id_hargafilm:DataTypes.INTEGER,
    weekend_film:DataTypes.DECIMAL,
    normal_film:DataTypes.DECIMAL,
    special_film:DataTypes.DECIMAL,  
},{
    freezeTableName:true
});

export default hargaProduk;

(async()=>{
    await database.sync();
})();