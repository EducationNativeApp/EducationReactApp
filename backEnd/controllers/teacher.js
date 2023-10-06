const { add,put,remove,getOneArabic,getAll,} = require("../database/model/teacher")

const addTeacher = (req, res) => {
  const ModuleData = req.body; 
  console.log(ModuleData);
  
  add(ModuleData, (error, results) => {
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

  const getTeachersForSubjectInClassController = (req, res) => {
    const { idsubject, idclasses } = req.params; 
    
    getTeachersForSubjectInClass(idsubject,idclasses, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(results);
      }
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


  

  module.exports ={
    addTeacher,
    UpdateTeacher,
    RemoveTeacher,
    getTeachersForSubjectInClassController,
    getAllTeacher

  }


