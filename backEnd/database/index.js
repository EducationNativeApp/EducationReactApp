const mysql = require('mysql2')
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
<<<<<<< HEAD
    password : 'Ines+est123a1',
=======
    password : '10697',
>>>>>>> origin/main
    database : 'Harmony',
})
conn.connect((err)=>{
    if(err){
        console.log(err);
    }
    else {
        console.log('db connected');
    }
})
module.exports = conn