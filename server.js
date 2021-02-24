const express = require('express')
const sum = require('./sum')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sum', (req, res) => {
    let a = req.query.a || 0
    let b = req.query.b || 0
    let c = req.query.c || 0
    let d = req.query.d || 0
    let e = req.query.e || 0
    let f = req.query.f || 0

    let result = sum(a,b,c,d,e,f)
    res.send({ sum: result })
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
