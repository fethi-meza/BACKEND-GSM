const express =require('express')
const router =express.Router()

const {getUsers ,createUsers , deletUser} = require('../Controller/UserControler')



router.get('/',getUsers)
router.post('/',createUsers)

router.get('/:id',deletUser)



module.exports = router