require('dotenv').config();
const sendMail = require('./lib/nodemailer');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

const publicPath = path.join(__dirname,'Public');

app.use(express.json());
app.use(express.static(publicPath));

app.get('/', (_, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/sendMail',async(req,res)=>{
  const data = {name:req.body.name,email:req.body.email,subject:req.body.subject,phone:req.body.phone,message:req.body.message};
  console.log(data)
  const info = await sendMail(data);
  if(info) res.status(200).json({message:"Email sent successfully"});
  else res.status(500).json({error: "Internal server error"});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
