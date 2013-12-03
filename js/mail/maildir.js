Maildir = require('maildir');


maildir = new Maildir("/home/exu/Maildir");

var messageListener = function (message) {
      console.log(message);
}

maildir.on("newMessage", messageListener);
maildir.monitor();
