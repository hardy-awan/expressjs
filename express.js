const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./router/route');
const uploadData = require('express-fileupload')


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true


}))

app.use(uploadData())



app.get('/', (req, res) => {
    res.render('index')
});

app.use('/dilo', routes)

app.listen(7000, () => {
    console.log('Server is running at port 7000');
})