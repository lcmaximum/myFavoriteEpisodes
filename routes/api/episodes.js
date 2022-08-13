const express = require('express')
const router = express.Router()
const episodesCtrl = require('../../controllers/api/episodes')

router.get('/', episodesCtrl.index)
router.post('/', episodesCtrl.create)

module.exports = router
