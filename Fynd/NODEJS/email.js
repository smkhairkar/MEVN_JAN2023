//try with a http server running and see if you get email
//for the error resolution
var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sujatamkhairkar10@gmail.com',
        pass: 'Sujata@102233'
    }
});

var mailOptions = {
    from: 'sujatamkhairkar10@gmail.com',
    to: 'smkhairkar@mitaoe.ac.in',
    subject: 'Sending Email using Node.js',
    text:'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Email sent: '+ info.response);
    }
});