const express = require('express')
const favicon=require('serve-favicon')
const bodyParser = require('body-parser')
const sequilize=require('./src/db/sequilize')
const cors = require('cors')



const app = express()
const port =process.env.PORT || 3012

app 
app.get('/',(req,res)=> res.send('Hello hoku'))

.use(bodyParser.json())
.use(favicon(__dirname + '/favicon.ico'))
.use(cors())


sequilize.initDb()
require('./src/routes/findAllproducts')(app)
require('./src/routes/creatProduct')(app)
require('./src/routes/findProductByPk')(app)
require('./src/routes/updateProduct')(app)
require('./src/routes/deleteProducts')(app)

app.use(({res})=>{
    const message='Impossible de rouver la rassource demandé !Vous pouvez essayer une autre url.'
    res.statut(404).json({message})
}
)
app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))
