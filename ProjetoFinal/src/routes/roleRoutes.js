const express = require('express')
const router = express.Router()

const controller = require('../controller/roleController')

// Post
router.post('/new', controller.criaRole)

// Get
router.get('/', controller.listaRole)

// Get
router.get('/:id', controller.listaUmRole)

// Patch
router.patch('/:id', controller.atualizaRole)

// Delete
router.delete('/:id', controller.deletaRole)

module.exports = router