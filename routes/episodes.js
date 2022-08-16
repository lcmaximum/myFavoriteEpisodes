const express = require('express')
const router = express.Router()
const episodesCtrl = require('../../controllers/api/episodes')

router.get('/', episodesCtrl.index)
router.post('/', episodesCtrl.create)
//router.put('/', episodesCtrl.update) //HEYYY
router.post('/:id/reviews', episodesCtrl.createReview);
router.delete('/:id', episodesCtrl.delete);

module.exports = router
