const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const ProdectRoute =  require('./Router/ProdectRoute')
const UserRoute =  require('./Router/UserRoute')

const doenv =require('dotenv').config()








const app = express()
const port = 3000

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())



app.use('/prodect',ProdectRoute)
app.use('/Users',UserRoute)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))