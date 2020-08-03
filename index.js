const express = require('express')
const randomColor = require('randomcolor')

const app = express()

app.use((req, res) => {
  res.status(200).json({ color: randomColor() })
})

app.listen(3000, (err) => {
  if (err) {
    console.error(err)
  }
  console.log('Listening on http://localhost:3000')
})