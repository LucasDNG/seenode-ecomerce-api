import express from 'express'

const app = express()

const PORT = process.env.PORT

app.get('/products', (req, res) => {
  res.json({
    id: '1',
    name: "laptop-gaming",
    price: 1000,
    description: "laptop gaming lenovo",
    imageURL: "https://p3-ofp.static.pub/fes/cms/2022/09/29/bp2i817wo5lsv7wm7xddnflh9tm7d7225910.png"
  })
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
})
