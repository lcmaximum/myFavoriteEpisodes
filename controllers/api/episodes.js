const Episode = require('../../models/episode')

module.exports = {
    create, index, delete: deleteEpisode, createReview, updateEpisode
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
//Heyyyyyyyyy
async function updateEpisode(req,res) {
     
      try{
        const episode= await Episode.findByIdAndUpdate(req.params.id, 
            {episodeTitle: req.body.episodeTitle}, {new: true})
            res.json(episode)
                }
    catch(err){
        console.log(err)
    }
}

async function createReview (req, res) {

    try {

        const episode = await Episode.findByIdAndUpdate(req.params.id, {$push: { reviews: req.body}}, {new: true}) //HEYYY TIMESTAMPS
        if(episode) {
            res.status(200).json(episode)    
        } else {
            res.status(404).json({message:'Episode Not Found'})    
        }

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const deleteReview = async (req, res) => {


    try {

        const episode = await Episode.findByIdAndUpdate(req.params.episodeID, {$pull: { reviews: {_id: req.params.reviewID}}}, {new: true, upsert:true})
        if(episode) {
            res.status(200).json(episode)    
        } else {
            res.status(404).json({message:'Episode Not Found'})    
        }
        


    } catch (error) {
        res.status(400).json({message:error.message})
    }}