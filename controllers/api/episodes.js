const Episode = require('../../models/episode')

module.exports = {
    create, index, delete: deleteEpisode
}
async function index(req, res) {
    try {
    const episodes = await Episode.find({'addedBy': req.user})
    res.status(200).json(episodes)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}
async function create(req, res) {
    req.body.addedBy = req.user //HEYYY
    console.log("ADDED BY ", req.body.addedBy)
    try {
        const episode = await Episode.create(req.body)
        res.status(200).json(episode)
        // return episode;
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteEpisode(req, res) {
    try{
        const episode = await Episode.findByIdAndDelete(req.params.id);
        res.status(200).json(episode) 
    } catch(err){ 
        console.log(err);
        res.status(400).json(err);


    }
}
