const express = require('express');
const router = express.Router();
const  {addTeacher,UpdateTeacher,RemoveTeacher, getAllTeacher,getTeacherByFirstClassController,getTeacherBySecondClassController} = require ("../controllers/teacher")


router.post('/add',addTeacher);
router.get('/get',getAllTeacher)
router.get('/getTeacherFirst',getTeacherByFirstClassController)
router.get('/getTeacherSecond',getTeacherBySecondClassController)
router.delete('/:id',RemoveTeacher)
router.put('/:id',UpdateTeacher)





module.exports = router;