const express = require(`express`)
const app = express()
const path = require('path');


app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

const port = 3000;

app.get('/', function (req, res) {
    res.render('Pages/hjemmeside');  
});


app.get('/logInn', function (req, res) {
    res.render('Pages/logInn');
});
app.get('/bliKunde', function (req, res) {
    res.render('Pages/bliKunde');
});


app.get('/hjemmeside', function (req, res) {
    res.render('Pages/hjemmeside');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});