const app = require('express')()
const bodyParser = require('body-parser')
const request = require('request-promise-native')
const morgan = require('morgan')

const PORT = 3000
const DB_USR = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const DB_URL = `http://${DB_USER}:${DB_PASSWORD}@couchdb:5984/_db/${DB_NAME}`

// configure middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Content-Type','application/json')
  next()
})
app.use(morgan('combined'))

app.post('/expense', (req, res) => 
  const { 
    name,
    payee,
    date,
    value,
    comment,
    image
  } = req.body

  if (!primary || !secondary || !content || !code) {
    return res.status(400).end('Required parameters: primary, secondary, content, code')
  }

  request
    .post(DB_URL, {
      name,
      payee,
      date,
      value,
      comment,
      image
    })
    .then()

  // write to couch, then

  // generate csv from couchdb
})

app.get('/report', (req, res) => {
  // return data 
})



const server = app.listen(PORT, () => {
  console.log(`node server listening on port ${PORT}`)
})