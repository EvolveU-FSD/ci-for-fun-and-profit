const express = require('express')
const sum = require('./sum')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function getIntQueryParam(req, paramName) {
  return parseInt(req.query[paramName] || '0')
}

app.get('/jsonTest', (req, res) => {
  try {
    let jsonText = req.query.object || '{}'
    let parsedObject = JSON.parse(jsonText)     
    res.send(parsedObject)
  }
  catch(error) {
    res.sendStatus(400)
  }

})

app.get('/sum', (req, res) => {
    let a = getIntQueryParam(req,'a')
    let b = getIntQueryParam(req,'b')
    let c = getIntQueryParam(req,'c')
    let d = getIntQueryParam(req,'d')
    let e = getIntQueryParam(req,'e')
    let f = getIntQueryParam(req,'f')

    let result = sum(a,b,c,d,e,f)
    res.send({ sum: result })
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
