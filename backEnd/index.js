const express =require('express')
const port = 3001
const cors = require('cors')
const app = express()
const db = require('./database/index')
const userRoutes = require('./routes/users')
const teacherRoute=require("./routes/teacher")
const classeRoute=require("./routes/classe")
const SubjectRoute=require("./routes/subject")
const StudentRoute=require("./routes/student")
const { getAll } = require('./controllers/users');
const { update } = require('./controllers/EditProfile')
const { updateUserPassword } = require('../backEnd/controllers/users');

const crypto = require('crypto'); // Import the crypto module
const nodemailer = require('nodemailer');


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/user',userRoutes)
app.use('/teacher',teacherRoute)
app.use('/classe',classeRoute)
app.use('/subject',SubjectRoute)
app.use('/student',StudentRoute)
{/*app.use('/api/payement',payementRoutes);*/}

const CLIENT_ID = "269394138802-7d0vaf1cq2nh8tqqipujdd27plsri8t8.apps.googleusercontent.com"
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04Tq0ie_KxFuCCgYIARAAGAQSNwF-L9Irp-uftta6x36cYuWPk2Io4ZaQ7-Oi1UW_6Fdx8d3EIw27QC_sosOGS0wEUswIMSgLX2A";







app.get('/api/users/getAll',(req,res)=>{
  getAll((err,result)=>{
      if(err){
          res.status(500).json(err)
      }
      else {
          res.status(200).json(result)
      }
  })
})

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

//Reset password functionnality 


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

// Route to reset password
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




app.listen(port,()=>{
    console.log(`server connected ${port}`);
})































//const CLIENT_ID = "269394138802-7d0vaf1cq2nh8tqqipujdd27plsri8t8.apps.googleusercontent.com"
// const CLIENT_SECRET = "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";
// const REDIRECT_URI = "https://developers.google.com/oauthplayground";
// const REFRESH_TOKEN = "1//04Tq0ie_KxFuCCgYIARAAGAQSNwF-L9Irp-uftta6x36cYuWPk2Io4ZaQ7-Oi1UW_6Fdx8d3EIw27QC_sosOGS0wEUswIMSgLX2A";
// const oAuth2Client = new OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: "medb0748@gmail.com",
//     clientId: CLIENT_ID,
//     clientSecret: CLIENT_SECRET,
//     refreshToken: REFRESH_TOKEN,
//     // accessToken: oAuth2Client.getAccessToken(),
    
//   },
// });

// const verificationCodeMap = new Map();

// app.post("/forget-password-email", async (req, res) => {
//   const { email } = req.body;
//   getAll((err, users) => {
//     if (err) {
//       res.status(500).json(err);
//     } else {
      
//       const user = users.find((user) => user.user_email === email);
//       if (!user) {
//         res.status(400).send("Email not found");
//         return;
//       }

//       const verificationCode = Math.floor(100000 + Math.random() * 900000);
//       const mailOptions = {
//         from: "assilelabed1993@gmail.com",
//         to: email,
//         subject: "Reset Password Code",
//         text: `Your reset password code is ${verificationCode}`,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log(error);
//           res.status(500).send(error);
//         } else {
//           console.log("Email sent: " + info.response);
//           res.status(200).json("Email sent successfully");
//           verificationCodeMap.set(email, verificationCode);
//           console.log("Verification code for", email, "is", verificationCode);
//         }
//       });
//     }
//   });
// });




// app.post("/verify-code", (req, res) => {
//   const { email, code } = req.body;
//   console.log("email:", email);
//   console.log("code:",typeof(Number(code)));
//   const verificationCode = verificationCodeMap.get(email);
//   console.log("verificationCode:",typeof(verificationCode) );
//   if (verificationCode == Number(code)) {
//     res.status(200).json("Code verified successfully");
//   } else {
//     res.status(400).json("Invalid code");
//   }
// });
