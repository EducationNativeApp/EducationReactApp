const express = require('express');
const router = express.Router();
const  {addStudent,getStudentsInClassController,getAllStudent,RemoveStudent,UpdateStudent} = require ("../controllers/student")


router.post('/add',addStudent);
router.get('/get',getAllStudent)
router.delete('/:id',RemoveStudent)
router.put('/:id',UpdateStudent)
router.get('/getByClass/:idclasses', getStudentsInClassController);




module.exports = router;