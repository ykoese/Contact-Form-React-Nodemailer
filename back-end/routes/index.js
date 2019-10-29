const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const creds = require('../config/config');

const transport = {
  service: "Gmail",
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log(success, 'Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const text = req.body.text
  const content = `name: ${name} \n email: ${email} \n message: ${text}`

  const mail = {
    from: name,
    to: 'your@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content

  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
