var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
service: 'gmail',
auth:{
user:'nikhil.19733@knit.ac.in',
pass:'Ns@134113'
}
});

var mailOptions = {
from:'nikhil.19733@knit.ac.in',
to:'neeraj.19732@knit.ac.in',
subject:'Important',
text:'Test NodeJs Nodemailer'
};

transporter.sendMail(mailOptions,function(error, info){
if(error){
console.log(error);
}
else{
console.log('Email sent: '+info.response);
}
});
