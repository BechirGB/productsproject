module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
         
            label: {
                type: DataTypes.STRING(255),
           
            },
            quantity: {
                type: DataTypes.INTEGER
            },
            price: {
                type: DataTypes.DECIMAL(10,2)
            },
            buying: {
                type: DataTypes.INTEGER,
              
            },
            selling: {
                type: DataTypes.INTEGER,
             
            }
        },{
            
                timestamps: true,
                createdAt: 'created',
                updatedAt: false
              })
             } 
            
       