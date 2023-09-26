const express =require('express')
const port = 3001
const cors = require('cors')
const app = express()
const db = require('./database/index')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.listen(port,()=>{
    console.log(`server connected ${port}`);
})