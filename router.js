const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/', (req, res) => {
  res.json({response:'Hello World!'})
})

router.post('/', (req, res, next) => {
   // res.status(404).send('Post!')
   
   try {
    throw new Error("New error")
   }
   catch (error) {
    next(error)
   }  
})

module.exports = router