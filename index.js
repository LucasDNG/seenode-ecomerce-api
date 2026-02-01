import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).send('OK')
})

app.get('/products', (req, res) => {
  res.json({
    id: '1',
    name: 'laptop-gaming',
    price: 1000
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})