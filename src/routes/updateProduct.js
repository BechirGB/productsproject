
const { ValidationError } = require('sequelize')
const {Product} =require('../db/sequilize')
const auth = require('../auth/auth')

module.exports = (app) => {
    app.put('/api/products/:id', auth,(req, res) => {
      const id = req.params.id
       Product.update(req.body, {
        where: { id: id }
      })
      .then( _ => {
        return Product.findByPk(id).then(product => {
            if (product===null){
                const message='Le produit demandé n\'existe pas.Rézssayer avec un autre identifient';
                return res.status(404).JSON({message})
            }

          const message = `Le produit ${product.label} a bien été modifié.`
          res.json({message, data: product })
        })
      })
      .catch (error =>{
        if(error instanceof ValidationError){
        return res.status(400).json({message:error.message,data:error})
    }
        
        const message="Le produit n\'a pas pu etre modifié.Réassayer dans quelques instant.";
        
      })
  

    })
  }