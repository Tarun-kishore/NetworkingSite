require('dotenv').config()
const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const hbs = require('hbs')
const methodOverride = require('method-override')
require('./db/sql')

//Routes
const userRoutes = require('./routes/user')
const indexRouter = require('./routes/index')
const postRouter = require('./routes/post')

app.set('view engine','hbs')
app.set('views','src/templates/views')
hbs.registerPartials('src/templates/partials')
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.json())


app.use(express.static('src/public'))

app.use('/user',userRoutes)
app.use('/post',postRouter)
app.use('/',indexRouter)

const port = process.env.port || 3000

app.listen(port,()=>{
    console.log('server runnning')
})
