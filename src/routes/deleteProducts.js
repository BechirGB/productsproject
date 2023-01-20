const {Product}=require('../db/sequilize')
const auth = require('../auth/auth')

module.exports = (app) => {
    app.delete('/api/products/:id' ,auth, (req, res) => {
       Product.findByPk(req.params.id).then(product => {
        if (product==null){
            const message='Le produit demandé n\'existe pas.Rézssayer avec un autre identifient';
            return res.status(404).json({message})
        }
        const productDeleted = product;
        product.destroy({
          where: { id: product.id }
        })
        .then(_ => {
          const message = `Le produit avec l'identifiant n°${productDeleted.id} a bien été supprimé.`
          res.json({message, data: productDeleted })
        })
      })
      .catch(error=>{
        const message='Le produit n\'a pas pu etre supprimé.Réassayer dans quelques instants'
        res.status(500).jon({message,data:error})
      })
    })
    
  }