const mysql=require ('mysql')
/* npm i mysql ile kuruluyor */
require('dotenv/config')
    dbConn=mysql.createConnection({
        user:process.env.MYSQL_USER,
        password:process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB_NAME,
        host:process.env.MYSQL_INSTANCE_NAME
    })
var dbConn=mysql.createConnection({
    user:"root",
    password:"",
    database:"kampus",/* kampus veri tabanı açtık*/
    host:"localhost"
})
dbConn.connect((err)=>{
    if(!err){
        console.log("veritabanına bağlandı")

    }else {
        console.log("Bağlantı hatası ")
    }
})
/* dotenv (gizli dosyaları n env diye dosya açıp bu bağlantı dosyasıyla balan )(npm i dotenv)*/ 
module.exports=dbConn 