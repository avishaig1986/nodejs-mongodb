
/* JSLint configuration 
https://stackoverflow.com/questions/46038027/define-is-not-defined-eslint
https://github.com/storybookjs/storybook/issues/3656

    "env": {
        "node": true,
        "commonjs": true
    },

*/
const express = require('express')
const app = express(); //https://expressjs.com/en/4x/api.html
const api = require('./api') //where the api routes will go
const morgan = require('morgan') //logger
const bodyParser = require('body-parser')
const cors = require('cors')

app.set('port', (process.env.PORT || 8081)) // if the default port is not set it will get 8081

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: false}))

app.use(cors())

app.use('/api', api)
app.use(express.static('static'))

app.use(morgan('dev')) //github.com/expressjs/morgan

app.use(function (req, res){
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

// MongoDB Connection

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://avishai:Daydream1-mongodb@cluster0-jhaj1.mongodb.net/virtualstandups', {userNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:')) //catch errors attempting to connect with mongoose
db.once('open', function () {
  console.log('Connected to MongoDB')

  app.listen(app.get('port'), function(){
  console.log('API Server Listening on port ' + app.get('port') + '!')
  })
})



