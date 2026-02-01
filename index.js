import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.get('/products', (req,res)=>{
    res.json({
        id: '1',
        name: "laptop-gaming",
        price: 1000,
        description: "laptop gaming lenovo",
        imageURL: "https://p3-ofp.static.pub/fes/cms/2022/09/29/bp2i817wo5lsv7wm7xddnflh9tm7d7225910.png"

    })
})


app.listen(port, ()=>{
    console.log('server on port', port)
})