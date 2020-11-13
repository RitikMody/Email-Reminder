const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const schedule = require('node-schedule');
const nodemailer = require("nodemailer");
require('dotenv').config();


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get("/",function(req,res){
  res.render("index");
});

app.post("/",function(req,res){
  let post={
    reminderReceiver:req.body.receiver,
    reminderSubject:req.body.subject,
    reminderBody:"<h1>"+req.body.subject+"</h1><br><pre style='font-size:30px;'>"+req.body.text+"</pre>",
    reminderTime:req.body.time,
  };
  console.log(post);
  var j = schedule.scheduleJob(post.reminderTime,function(){
    console.log("Sending");
    async function main() {
      let testAccount = await nodemailer.createTestAccount();
      let transporter = nodemailer.createTransport({
        aliases: [
            "Outlook",
            "Outlook.com",
            "Hotmail.com"
        ],
        domains: [
            "hotmail.com",
            "outlook.com"
        ],
        host: "smtp.live.com",
        port: 587,
        tls: {
            "ciphers": "SSLv3"
        },
        auth: {
          user: "reminder.reminds@outlook.com",
          pass: process.env.PASSWORD,
        },
      });

      let info = await transporter.sendMail({
          from:'reminder.reminds@outlook.com',
          to: post.reminderReceiver,
          subject: post.reminderSubject,
          html: post.reminderBody
        })
      console.log("Message sent: %s", info.messageId);
    }

    main().catch(console.error);

  });
  res.redirect("/");
});

app.listen(process.env.PORT||3000,()=>{
  console.log("Listening at port 3000.");
});
