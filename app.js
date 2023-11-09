const express = require('express')
const db_connect=require('./db/mysql_connect') /* mysql ile bağlantı kurdu ama gizli */
const router =require('./routers')
require('dotenv/config')
const app = express()


app.get('/',function (req, res) {
  res.send('Anasayfa')
})
app.get('/app',function (req, res) {
    res.send('app sayfa')
   })

app.use(express.json())
app.use(express.json({limit:'50mb'}))
app.use(express.json({limit:"50mb",extended:true,parametreLimit:5000}))
app.use('/api',roter) // api geliştirmesi bittiğinde sayfanın tasarımını yapılınca (localhost3000/api/register->endpoint<-->istek gelir<--)
app.listen(process.env.PORT)