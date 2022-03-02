// Basic JSON
const express = require('express')
const app = express()
const { products } = require('./data.js')
app.get('/', (req, res)=> {
  res.send('<h1>Welcome!</h1><a href=\'/api/products\'>See our products</a>')
  console.log(products)
})

app.get('/api/products', (req, res)=> {
  const newProducts = products.map((product)=>{
    const { id, name, price } = product;
    return {id, name, price }
  })
  res.json(newProducts)
})

app.get('/api/products/1', (req, res)=> {
  const singleProduct = products.find((product)=> product.id === 1 )
  res.json(singleProduct)
})
app.listen(5000, ()=> {
  console.log('Server listening on port: 5000... ')
})