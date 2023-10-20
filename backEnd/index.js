const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cors  =require("cors")
const path = require('path')
const bodyparser = require ("body-parser")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('app'));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules', )));
app.use(bodyparser.json())
app.use(cors())





const db = require('./database/index')
const userRoutes = require('./routes/users')
const teacherRoute=require("./routes/teacher")
const classeRoute=require("./routes/classe")
const SubjectRoute=require("./routes/subject")
const StudentRoute=require("./routes/student")
const StudRoute= require('./routes/notes')

const { update } = require('./controllers/EditProfile')
const { updateUserPassword } = require('../backEnd/controllers/users');

const crypto = require('crypto');
const nodemailer = require('nodemailer');

app.use('/user',userRoutes)
app.use('/teacher',teacherRoute)
app.use('/classe',classeRoute)
app.use('/subject',SubjectRoute)
app.use('/student',StudentRoute)
app.use('/note',StudRoute)

var clientSocketIds = [];
var connectedUsers= [];

const getSocketByuserId = (userId)=>{
  var socket=''
  for(var i=0;i<clientSocketIds;i++){
    if(clientSocketIds[i].userId == userId){
      socket=clientSocketIds[i].socket;
      break;
    }
  }
  return socket
}


io.on('connection', (socket) => {
  console.log("Conected")

  socket.on('disconnect', () => {
    console.log('disconnected')
    connectedUsers = connectedUsers.filter((item)=>{
      item.socketId != socket.id
    })
    io.emit('updateUserList',connectedUsers)
  });


  socket.on('loggedin',(user)=>{
    clientSocketIds.push({socket:socket,userId:user.user_id})
    connectedUsers = connectedUsers.filter((item) => {
      item.user_id != user.user_id
    });
    connectedUsers.push({...user, socketId: socket.id})
    io.emit('updateUserList', connectedUsers)
  })

  socket.on('create', function(data) {
    console.log("create room")
    socket.join(data.room);
    let withSocket = getSocketByUserId(data.withUserId);
    socket.broadcast.to(withSocket.id).emit("invite",{room:data})
});
socket.on('joinRoom',(data)=> {
    socket.join(data.room.room);
});

socket.on('message',(data)=> {
    socket.broadcast.to(data.room).emit('message', data);
})
  

  // socket.on('chat message', (data) => {
  //   io.emit('chat message', data);
  // });

  // socket.on('message', (message) => {
  //   console.log('Received message:', message);
  //   io.emit('message', message);
  // });
});
{/*app.use('/api/payement',payementRoutes);*/}

const CLIENT_ID = "269394138802-7d0vaf1cq2nh8tqqipujdd27plsri8t8.apps.googleusercontent.com"
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04Tq0ie_KxFuCCgYIARAAGAQSNwF-L9Irp-uftta6x36cYuWPk2Io4ZaQ7-Oi1UW_6Fdx8d3EIw27QC_sosOGS0wEUswIMSgLX2A";

// app.get('/user/getAll',(req,res)=>{
//   getAll((err,result)=>{
//       if(err){
//           res.status(500).json(err)
//       }
//       else {
//           res.status(200).json(result)
//       }
//   })
// })

app.put('/api/users/editProfile',(req,res)=>{
  update((err,result)=>{
      if(err){
          res.status(500).json(err)
      }
      else {
          res.status(200).json(result)
      }
  })
})



const SECRET_KEY = "sdsdsd12014651520ds52qqs"; 

let generatedVerificationCode;
let resetTokens = new Set();

function generateVerificationCode() {
  const code = crypto.randomInt(100000, 1000000);
  generatedVerificationCode = code.toString();
  return generatedVerificationCode;
}

app.post('/send-verification-code', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Recipient email is required' });
  }
 
  const verificationCode = generateVerificationCode();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    secure:true,
    logger:true,
    debug:true,
    secureConnection:false,
    auth:{
      user:"oubaidbensaid18910@gmail.com",
      pass:"jyuk kkny txpk epba "
    },
    tls:{
      rejectUnauthorized:true
    }
  });

  const mailOptions = {
    from: 'oubaidbensaid18@gmail.com',
    to: email,
    subject: 'school',
    text: `Your verification code is: ${verificationCode}  `,

    
  };

  console.log('Generated Verification Code:', generatedVerificationCode);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send verification code' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Verification code sent successfully' });
    }
  });
});

app.post('/check-verification-code', (req, res) => {
  const { verificationCode } = req.body;

  if (!verificationCode) {
    return res.status(400).json({ message: 'Verification code is required' });
  }

  console.log('Generated Verification Code:', generatedVerificationCode);

  if (verificationCode === generatedVerificationCode) {
  console.log('Verification code is valid');
    res.status(200).json({ message: 'Verification code is valid' });
  } else {
    console.log('Verification code is invalid');
    res.status(400).json({ message: 'Verification code is invalid' });
  }
});

function generateResetToken(userId) {
  const payload = {
    user: {
      id: userId,
    },
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}


app.post('/reset-password/:token', (req, res) => {
  const { newPassword, confirmNewPassword } = req.body;
  const resetToken = req.headers.token;

  if (!newPassword || !confirmNewPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  if (resetTokens.has(resetToken)) {
    const userId = getUserIdFromResetToken(resetToken);

    
    console.log(`Password updated for user (using reset token)`);
    res.status(200).json({ message: 'Password updated successfully' });
  } else {
    res.status(400).json({ message: 'Invalid reset token' });
  }
});

function getUserIdFromResetToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded.user.id;
  } catch (error) {
    return null;
  }
}


app.put('/reset-password/:userId',(req, res) => {
  const { userId } = req.params;
  const { newPassword, confirmNewPassword } = req.body;

  if (!newPassword || !confirmNewPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (newPassword !== confirmNewPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  const success = updateUserPassword( req.body.newPassword ,req.params.userId);
console.log(req.body);
  if (!success) {
    console.log(`Password updated for user (using user ID)`);
    res.status(400).json({ message: 'Invalid user ID' });
  } else {
    res.status(200).json({ message: 'Password updated successfully' });
  }
});
io.listen(3001) 
server.listen(3000, () => {
  console.log('listening on *:3000');
});

