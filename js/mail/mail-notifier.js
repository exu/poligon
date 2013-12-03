var notifier = require('mail-notifier');
var $ = require('jquery');

var imap = {
    username: "crm_mail_importer@e-d-p.net",
    password: "43r5gWAERGrewg",
    host: "e-d-p.net",
    port: 143, // imap port
    secure: false // use secure connection
};


console.log('start');

var mailParser = function(mail){
    if(mail.html) {
        var a = $(mail.html).find('a');
        if(a) $(a).each(function(k, v){
                  console.log("Links: ", $(v).attr('href'));
              });
    }
};

notifier(imap).on('mail', mailParser).start();