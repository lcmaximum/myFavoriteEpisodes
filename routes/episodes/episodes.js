const express = require('express')
const router = express.Router()
const episodesCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', episodesCtrl.create)