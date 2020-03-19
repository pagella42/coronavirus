const express = require ('express')
const bodyParser = require ('body-parser')
var forceSsl = require('force-ssl-heroku');
const path = require('path')
const app = express()
const PORT = 4000

app.use(express.static(path.join(__dirname, 'build')))
app.use(forceSsl);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))




app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || PORT,()=>console.log(`Running server on port: ${PORT}`))