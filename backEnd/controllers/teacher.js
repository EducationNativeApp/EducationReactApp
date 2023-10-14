const { add,put,remove,getAll,getTeacherByFirstClass,getTeacherBySecondClass,} = require("../database/model/teacher")

const addTeacher = (req, res) => {
  const teacherData = req.body; 
  console.log(teacherData);
  
  add(teacherData, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json(error); 
    } else {
      res.status(201).json(results); 
    }
  });
};

const UpdateTeacher = (req, res) => {
    const {id}=req.params
    const updatedData = req.body;
    put(id, updatedData, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };


  const RemoveTeacher = (req, res) => {
    const id = req.params.id;
  
    remove(id, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  };



  const getAllTeacher = (req, res) => {
    getAll((error, teachers) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(teachers);
      }
    });
  }


  
  const getTeacherByFirstClassController = (req, res) => {
    const className = "first class"; // Utilisation de "first class" directement
    getTeacherByFirstClass(className, (error, teachers) => {
      if (error) {
        console.error(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(teachers);
      }
    });
  };
  
  const getTeacherBySecondClassController = (req, res) => {
    const className = "Second class"; // Utilisation de "first class" directement
    getTeacherBySecondClass(className, (error, teachers) => {
      if (error) {
        console.error(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(teachers);
      }
    });
  };

  

  module.exports ={
    addTeacher,
    UpdateTeacher,
    RemoveTeacher,
    getTeacherByFirstClassController ,
    getAllTeacher,
    getTeacherBySecondClassController

  }


