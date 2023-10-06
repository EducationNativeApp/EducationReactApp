const connection = require("../index")

const add = (SubjectData, callback) => {
  const sql = `
    INSERT INTO subject
    (subject_name, note1, note2, note3, Student_idStudent)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  const values = [
    SubjectData.subject_name,
    SubjectData.note1,
    SubjectData.note2,
    SubjectData.note3,
    SubjectData.Student_idStudent
  ];

  connection.query(sql, values, function (error, results) {
    callback(error, results);
  });
};


  const put = (idsubject, updatedData, callback) => {
    const sql = `UPDATE subject SET ? WHERE idsubject = ?`;
    connection.query(sql, [updatedData, idsubject], function(error, results) {
        callback(error, results);
    });
  };

  const remove = (idsubject, callback) => {
    const sql = `DELETE FROM subject WHERE idsubject = ?`;
    connection.query(sql, [idsubject], function(error, results) {
        callback(error, results);
    });
  };

  const getAll = (callback) => {
    const sql = `SELECT * FROM subject`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  };
  

  const getOne = (idsubject, callback) => {
    const sql = `SELECT * FROM subject WHERE idsubject = ?`;
    connection.query(sql, [idsubject], function (error, results) {
      callback(error, results);
    });
  };
  

 
  
  module.exports = {
    add,
    put,
    remove,
    getAll,
    getOne
  };