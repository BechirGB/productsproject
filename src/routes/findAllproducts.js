const auth = require('../auth/auth')
const {Product} = require('../db/sequilize')
  
module.exports = (app) => {
  app.get('/api/products', auth,(req, res) => {
    Product.findAll()
      .then(products => {
        const message = 'La liste de produits a bien été récupérée.'
        res.json({ message, data: products })
      })
  })
}