const { add,put,remove,getAll,getStudentsInClass,getOneStudent} = require("../database/model/student")

const nodemailer = require('nodemailer');

// const addStudent = (req, res) => {
//   const {First_name,LastName ,Birthday ,image,users_idusers,classes_idclasses,type} = req.body;
//   const StudentData = { First_name, LastName, Birthday ,email,section,image,users_idusers,classes_idclasses,type}

//   const gmailEmail = 'oubaidbensaid18910@gmail.com';
//   const gmailPassword = 'abs10697';

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "oubaidbensaid18910@gmail.com",
//       pass: "jyuk kkny txpk epba"
//     }
//   });

//   const mailOptions = {
//     from: "oubaidbensaid18910@gmail.com",
//     to: email, 
//     subject: 'school',
//     html: `
//         <html>
//             <body>
//                 <p> we get the student information </p>
//                 <p><strong>Message from ${StudentData.First_name}</strong></p>
//                 <p><strong>Phone number ${StudentData.LastName}</strong></p>
//                 <p><strong>Birthday ${StudentData.Birthday}</strong></p>
//                 <p><strong>Section ${StudentData.section}</strong></p>
//                 <p><strong>Image ${StudentData.image}</strong></p>
//             </body>
//         </html>
//     `
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ message: 'Failed to send a message' });
//     } else {
//       console.log('Email sent:', info.response);
//       // Assuming you want to add the student data to your database after sending the email
//       add(StudentData, (dbError, dbResults) => {
//         if (dbError) {
//           console.log(dbError);
//           res.status(500).json(dbError);
//         } else {
//           res.status(201).json(dbResults);
//         }
//       });
//     }
//   });
// };
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
    const idclasses = req.params.idclasses;
  
    getStudentsInClass(idclasses, (error, students) => {
      if (error) {
        console.log(error);
        res.status(500).json(error);
      } else {
        res.status(200).json(students);
      }
    });
  };


  const getOnStudent = (req, res) => {
    const id = req.params.idStudent;
  
    getOneStudent(id, function (err, result) {
      if (err) res.status(500).send(err);
      else if (!result) res.status(404).json({ error: "student not found" });
      else res.json(result);
    });
  };

  const getStudentsByUserController = (req, res) => {
    const idStudent = req.params.users_idusers;
  
    getStudentsByUser(idStudent, (error, students) => {
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
    getStudentsByUserController,
    getAllStudent,
    RemoveStudent,
    UpdateStudent,
    getOnStudent

  }


