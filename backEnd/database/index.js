const mysql = require('mysql2')
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Ines+est123a1',
    database : 'school',
})
connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log('db connected');
    }
})
module.exports = connection