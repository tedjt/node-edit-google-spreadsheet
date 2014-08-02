var Spreadsheet = require('../');
var creds = require('./cred-loader');

Spreadsheet.load({
  debug: true,
  username: creds.username,
  password: creds.password,
  //spreadsheetName: 'node-edit-spreadsheet',
  //worksheetName: 'Sheet1',
  spreadsheetId: '1hJdIOmC4yYJ1tmZ-FkCh-43bzGKG_-LRZTX0e-KXBc0',
  worksheetId: 'od6'
}, function run(err, spreadsheet) {
  if(err) throw err;
  //receive all cells
  spreadsheet.receive({getValues:false},function(err, rows, info) {
    if(err) throw err;
    console.log("Found rows:", rows);
    console.log("With info:", info);
    spreadsheet.receiveRow(1, function(err, rows, info) {
      if(err) throw err;
      console.log("Found rows:", rows);
      console.log("With info:", info);
    });
  });
});

