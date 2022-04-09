const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000

const app = express()

// app.get('/api/applications', (req,res)=>{
//   res.send('get goals')
// })
app.use('/api/applications', require('./routes/applicationRoutes'))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})