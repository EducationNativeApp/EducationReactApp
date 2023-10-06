const connection = require("../index")

const add = (ClassData, callback) => {
    const sql = `INSERT INTO classes SET ?`;
    connection.query(sql, ClassData, function (error, results) {
      callback(error, results);
    });
  };



  const remove = (idclasses, callback) => {
    const sql = `DELETE FROM users WHERE idclasses = ?`;
    connection.query(sql, [idclasses], function(error, results) {
        callback(error, results);
    });
  };

  const getAll = (callback) => {
    const sql = `SELECT * FROM classes`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  };
  

  

  
  
  module.exports = {
    add,
    remove,
    getAll
  };
  
  
  
  
  
  