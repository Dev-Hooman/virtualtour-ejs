const express = require('express');
const bodyParser = require('body-parser');
const { success } = require('consola');
const path = require('path');
const app = express();
const PORT  = 8000
const {startDB} = require('./DB/index')

app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./routes/home'));

app.listen(PORT, async () => {
    await startDB()
    success({ message: `Server Started, Listening on PORT ${PORT}`, badge: true })
});
