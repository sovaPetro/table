const express = require("express");
const bodyParser= require('body-parser');
const app = express();
const f = require('./db');
const port = process.env.PORT || 3000;

function start2() {
f.base(); // get base

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

// name db = sova
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/', (req, res) => {
   //var customers = db.collection('quotes').find();
   f.db.collection('quotes').find().toArray((err, result) => { 
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result});
   // console.log(result);
   });
});


app.get('/add', (req, res) => {
  res.sendFile(__dirname + '/views/form.html');
});


app.post('/quotes', (req, res) => {
   f.db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    //console.log('saved to database');
    res.redirect('/');
  });
});


// working
app.get('/quotes/del/:id', (req, res) => {
  f.db.collection('quotes').findOneAndDelete({id: req.params.id});
  
  res.redirect('/');
});
// not working yet ******************
app.get('/quotes/edit/:id', (req, res) => {
	
   f.db.collection('quotes').find({id: req.params.id }).toArray((err, result) => { 
    
    res.render('formEdit.ejs', {quotes: result[0]});
   // console.log("salo");
	
        });
});

app.post('/quotes/edit/:id', (req, res) => {
	f.db.collection('quotes').findOneAndUpdate({id: req.params.id}, {
    $set: {
      id: req.body.id,
      name: req.body.name,
	  city: req.body.city,
	  address: req.body.address,
	  email: req.body.email,
	  phone: req.body.phone}
	 
     });
 console.log("salo");
   res.redirect("/");
});
//***********************************
console.log("Start mongo examples");

}
exports.start2 = start2;
