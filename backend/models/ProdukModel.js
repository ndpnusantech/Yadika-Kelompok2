import {Sequelize} from "sequelize";
import database from "../config/database.js"

const { DataTypes } = Sequelize;

const produk = database.define('produk',{
    id_film:DataTypes.INTEGER,
    tittle_film:DataTypes.STRING,
    director_film:DataTypes.STRING,
    id_gendre:DataTypes.STRING,
    synopsis_film:DataTypes.TEXT,
    total_stock:DataTypes.INTEGER,  
    sisa_stock:DataTypes.INTEGER,  
    harga_film:DataTypes.DECIMAL,  
    tanggal_film:DataTypes.DATE,  
    id_lokasi:DataTypes.STRING,  
    studio_film:DataTypes.INTEGER,  
    status_film:DataTypes.STRING,  
    img_film:DataTypes.TEXT,  
    video_film:DataTypes.TEXT,  
    corousel_film:DataTypes.BOOLEAN,  
},{
    freezeTableName:true
});

export default produk;

(async()=>{
    await database.sync();
})();