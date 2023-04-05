const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

const moment = require('moment')

app.use(express.json())

const { beansRouter } = require('./routes/beans.route')
const { userRouter } = require('./routes/user.route')

const savedTime = moment()
const timeInTenMins = moment().add(10, 'm');

const eta = moment().add(5, 'm').subtract(moment()).minutes()

// console.log(eta)
// console.log(timeInTenMins)



app.use('/api/beans', beansRouter)
app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log('Startade server at:' + PORT)
})
