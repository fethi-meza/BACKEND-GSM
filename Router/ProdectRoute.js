const express =require('express')
const router =express.Router()

const {getProdects ,createProdect} = require('../Controller/ProdectControler')



router.get('/',getProdects)
router.post('/',createProdect)


module.exports = router