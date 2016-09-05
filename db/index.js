// experimental
const MongoClient = require('mongodb').MongoClient;

function base() {
		var db;
MongoClient.connect('mongodb://sovapetro:5uhbdtym@ds019956.mlab.com:19956/sova',
 (err, database) => {
    
   if (err) return console.log(err)
  db = database
  exports.db = db;
 
});

}

exports.base = base;
