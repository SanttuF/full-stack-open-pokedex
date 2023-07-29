const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})
app.get('/health', (req, res) => {
  return
  res.send('ok')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
