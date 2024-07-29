/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 100.0,
    description: 'Descrição do Produto 1',
    image:
      'https://d20d1u0tfijfbg.cloudfront.net/paitomotors/20248/foto-Album-de-PORSCHE-PANAMERA-A17922-668836672d66f.webp'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 200.0,
    description: 'Descrição do Produto 2',
    image:
      'https://d20d1u0tfijfbg.cloudfront.net/paitomotors/20217/foto-Album-de-MERCEDES-AMG-A17893-6686e2bc462fa.webp'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 300.0,
    description: 'Descrição do Produto 3',
    image:
      'https://d20d1u0tfijfbg.cloudfront.net/paitomotors/20198/foto-Album-de-PORSCHE-911-A-66869283b2501.webp'
  }
]

app.get('/products', (req, res) => {
  res.json(products)
})

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})
