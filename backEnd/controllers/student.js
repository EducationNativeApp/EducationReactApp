const { add,put,remove,getAll,getStudentsInClass} = require("../database/model/student")

const addStudent = (req, res) => {
  const StudentData = req.body; 
  console.log(StudentData);
  
  add(StudentData, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json(error); 
    } else {
      res.status(201).json(results); 
    }
  });
};

const UpdateStudent = (req, res) => {
    const {id}=req.params
    const updatedData = req.body;
    put(id, updatedData, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };


  const RemoveStudent = (req, res) => {
    const id = req.params.id;
  
    remove(id, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };

 
  const getAllStudent = (req, res) => {
    getAll((error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  }

  const getStudentsInClassController = (req, res) => {
    const classId = req.params.classId;
  
    getStudentsInClass(classId, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };


  

  module.exports ={
    addStudent,
    getStudentsInClassController,
    getAllStudent,
    RemoveStudent,
    UpdateStudent

  }


