const connection = require("../index")

const add = (SubjectData, callback) => {
  const sql = `INSERT INTO subject SET ?`;
  connection.query(sql, SubjectData, function (error, results) {
      callback(error, results);
  });
};


  const put = (idusers, updatedData, callback) => {
    const sql = `UPDATE users SET ? WHERE idusers = ?`;
    connection.query(sql, [updatedData, idusers], function(error, results) {
        callback(error, results);
    });
  };

  const remove = (idusers, callback) => {
    const sql = `DELETE FROM users WHERE idusers = ?`;
    connection.query(sql, [idusers], function(error, results) {
        callback(error, results);
    });
  };

  const getAll = (callback) => {
    const sql = `SELECT * FROM users`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  };
  

  
  const getTeachersForSubjectInClass = (idsubject, idclasses, callback) => {
    const sql = `select u.idusers , u.name from users u inner join classes c on (c.users_idusers = u.idusers  ) inner join subject_has_classes sc on (c.idclasses = sc.classes_idclasses ) inner join subject s on (sc.subject_idsubject = s.idsubject) where s.subject_name = "Arabic" AND u.ClassName = "first year"
    `;

    
    connection.query(sql, [idsubject, idclasses], function (error, results) {
      callback(error, results);
    });
  };
  
  module.exports = {
    add,
    put,
    remove,
    getTeachersForSubjectInClass,
    getAll
  };
  
  
  
  
  
  