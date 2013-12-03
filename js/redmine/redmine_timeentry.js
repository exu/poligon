#!/usr/bin/env node

var argv = require('optimist')
           .demand(['i','h'])
           .describe('i', 'Issue ID')
           .describe('h', 'Hours spent on task')
           .describe('d', 'Date')
           .default('d', new Date().toISOString().substr(0,10))
           .argv;

var message = argv._.join(" ");

// console.log( message );
// process.exit(1);
//console.log(argv.d); process.exit(1);

var Redmine = require('./redmine');
var redmine = new Redmine({
  host: 'redmine.e-d-p.net',
  apiKey: '4fdc2d1abe675d324bea0e64853552dedc679195'
});

redmine.postTimeEntry({
    issue_id: argv.i,
    spent_on: argv.d,
    hours : argv.h,
    activity_id: 18,
    comments: message
}, function(err, data){
  if (err) {
    console.log("Error: ", err.message);
    return;
  }

  console.log(data.time_entry.id);
}
);
