const express = require('express')
const app = express()
const port = 3000
const router = require('./router')
const {errorHandler} = require('./error-handler')



app.use(express.json());
app.use('/', router)

app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })


app.use(errorHandler)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})