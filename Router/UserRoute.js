const express = require('express');
const router = express.Router();

const {
    getUsers,
    createUsers,
    deletUser,
} = require('../Controller/UserControler');

router.get('/', getUsers);
router.post('/', createUsers);

router.delete('/:id', deletUser);

module.exports = router;
