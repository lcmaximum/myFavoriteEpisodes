const mongoose = require('mongoose')
const Schema = mongoose.Schema

const episodeSchema = new Schema({
    seriesTitle: String, //change to schema after hitting mvp
    episodeTitle: String,
    seriesSeasonNum: Number,
    seasonEpisodeNum: Number,
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'} //MDBREF - 
});

module.exports = mongoose.model('Episode', episodeSchema)