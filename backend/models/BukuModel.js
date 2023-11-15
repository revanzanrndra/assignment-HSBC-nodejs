import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Buku = db.define('buku', {
    judul: DataTypes.STRING,
    tahunTerbit: DataTypes.STRING,
    harga: DataTypes.BIGINT,
    penerbit: DataTypes.STRING,
    penulis: DataTypes.STRING

}, {
    freezeTableName:true
});

export default Buku;

(async()=>{
    await db.sync();
})();