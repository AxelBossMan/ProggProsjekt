const express = require(`express`)
const app = express()

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

const port = 3000;

app.get('/', function (req, res) {
    res.render('frontend');  
});

//test 1 
//tiss tass

app.get('/logInn', function (req, res) {
    res.render('logInn');
});
app.get('/bliKunde', function (req, res) {
    res.render('bliKunde');
});


app.get('/hjemmeside', function (req, res) {
    res.render('hjemmeside');
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

