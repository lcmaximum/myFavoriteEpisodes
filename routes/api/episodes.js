const express = require('express')
const router = express.Router()
const episodesCtrl = require('../../controllers/api/episodes')


router.post('/', episodesCtrl.create)

module.exports = router
