// params query
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
// semi colon infront of variable (:productID) allows it to be dynamic for urls
app.get('/api/products/:productID', (req, res)=> {
  // show parameters of the request
  console.log('params: ',req.params)
  // get productID from request params
  const { productID } = req.params
  // retrieve single product with matching ID
  const singleProduct = products.find((product)=> product.id === Number(productID) )
  // handle not finding a product
  if( !singleProduct ){
    res.status(404).send('Product does not exist...')
  }
  // return the product data
  res.json(singleProduct)
})
// product reviews
app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
  console.log(req.params)
  res.send('Astounding product review')
})

app.get('/api/v1/query', (req,res)=>{
  //console.log(req.query)
  // set certain query parameter keys
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if( search ){
    sortedProducts = sortedProducts.filter((product)=> {
      return product.name.startsWith(search)
    })
  }
  if( limit ){
    sortedProducts = sortedProducts.slice(0,Number(limit))
  }
  if( sortedProducts.length < 1 ){
    // no products match but successful query, return to prevent double sending responses
    return res.status(200).json({success: true, data : []})
  } else {
    res.status(200).json(sortedProducts)
  }

})
app.listen(5000, ()=> {
  console.log('Server listening on port: 5000... ')
})