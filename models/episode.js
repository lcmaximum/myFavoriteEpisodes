const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    displayName: String,
    content: String,

})

const episodeSchema = new Schema({
    seriesTitle: String, //change to schema after hitting mvp
    episodeTitle: String,
    seriesSeasonNum: Number,
    seasonEpisodeNum: Number,
    reviews: [reviewSchema],
    addedBy: {type: Schema.Types.ObjectId, ref: 'User'}, //MDBREF 
});

module.exports = mongoose.model('Episode', episodeSchema)