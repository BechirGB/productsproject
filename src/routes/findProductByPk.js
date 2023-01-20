const  {Product} = require('../db/sequilize');
const auth = require('../auth/auth')

module.exports = (app) => {
  app.get('/api/products/:id',auth,(req, res) => {
    Product.findByPk(req.params.id)
      .then(product => {
        if (product==null){
            const message='Le produit demandé n\'existe pas.Rézssayer avec un autre identifient';
            return res.statut(404).json({message})
        }
        const message = 'Un produit a bien été trouvé.'
        res.json({ message, data: product })
      })
      .catch(error=>{
        const message='Le produit n\'a pas pu etre ajouté .Réassayer dans quelques instants'
        res.status(500).json({message,data:error})
      })

  })
}