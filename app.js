const express = require("express");
const path = require("path");
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const port = 80;


// Define Mongoose Scehma
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
});

var contact = mongoose.model('Kitten', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the templates engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {  }
    res.status(200).render('home.pug', params); 
})

app.get('/contact', (req, res)=>{
    const params = {  }
    res.status(200).render('contact.pug', params); 
})


app.post('/contact', (req, res)=>{i
    const params = {  }
    res.status(200).render('contact.pug', params); 
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application is started successfully on port ${port}`);
});