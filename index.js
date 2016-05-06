var email   = require("email");
var server  = email.server.connect({
   user:    "samuel.ospina36@gmail.com", 
   password:"", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "i hope this works", 
   from:    "samuel <samuel.ospina36@gmail.com>", 
   to:      "someone <samuel.ospina36@gmail.com>",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });