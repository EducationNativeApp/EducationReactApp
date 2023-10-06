const express = require('express');
const router = express.Router();
const  {addTeacher,UpdateTeacher,RemoveTeacher,  getTeachersForSubjectInClassController, getAllTeacher} = require ("../controllers/teacher")


router.post('/add',addTeacher);
router.get('/get',getAllTeacher)
router.delete('/:id',RemoveTeacher)
router.put('/:id',UpdateTeacher)
router.get('/get/:id/:id', getTeachersForSubjectInClassController);




module.exports = router;