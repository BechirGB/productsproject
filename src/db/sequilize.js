const { Sequelize, DataTypes } = require('sequelize')
const ProductModel = require('../models/product')
const products=require('./mock-products')
const sequelize = new Sequelize('product_management', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false
  })
    
  const Product = ProductModel(sequelize, DataTypes)
    
  const initDb = () => {
    return sequelize.sync({force: true}).then(_ => {
      products.map(product => {
        Product.create({
          label: product.label,
          quantity: product.quantity,
          price: product.price,
          buying: product.buying,
          selling: product.selling
        }).then(product => console.log(product.toJSON()))
      })
           
      console.log('La base de donnée a bien été initialisée !')
    })
  }
    
  module.exports = { 
    initDb, Product
  }