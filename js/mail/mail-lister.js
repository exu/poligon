var MailListener = require("mail-listener");

var mailListener = new MailListener({
  username: "crm_mail_importer@e-d-p.net",
  password: "43r5gWAERGrewg",
  host: "e-d-p.net",
  port: 143, // imap port
  secure: false // use secure connection
});

mailListener.start();

mailListener.on("server:connected", function(){
  console.log("imapConnected");
});

mailListener.on("server:error", function(error){
  console.log("imapError", error);
});

mailListener.on("mail:parsed", function(mail){
  // do something with mail object including attachments
  console.log("emailParsed", mail.attachments);
  // mail processing code goes here
});