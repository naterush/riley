const express = require('express')
const app = express()
const port = 8000

// set up rendering
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// set up public shit
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('main.html');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))