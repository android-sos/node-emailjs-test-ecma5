var email   = require("emailjs");
var server  = email.server.connect({
   user:    "samuel.ospina36@gmail.com", 
   password:"S1234567s.", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "i hope this works", 
   from:    "samuel <samuel.ospina36@gmail.com>", 
   to:      "someone <samuel.ospina36@gmail.com>",
   cc: "",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });