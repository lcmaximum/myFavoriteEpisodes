const express = require('express')
const router = express.Router()
const episodesCtrl = require('../../controllers/api/episodes')

router.get('/', episodesCtrl.index)
router.post('/', episodesCtrl.create)
router.put('/:id/edit', episodesCtrl.updateEpisode)
router.delete('/:id', episodesCtrl.delete);

module.exports = router
