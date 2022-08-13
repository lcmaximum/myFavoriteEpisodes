const Episode = require('../../models/episode')

module.exports = {
    create
}

async function create(req, res) {
    try {
        // creates and adds user to database
        const episode = await Episode.create(req.body)
        res.status(200).json(episode)
        // return episode;
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}