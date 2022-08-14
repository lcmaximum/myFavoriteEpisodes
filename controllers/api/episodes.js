const Episode = require('../../models/episode')

module.exports = {
    create, index
}
async function index(req, res) {
    try {
    const episodes = await Episode.find({'addedBy': req.user.name})
    res.status(200).json(episodes)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}
async function create(req, res) {
    try {
        const episode = await Episode.create(req.body)
        res.status(200).json(episode)
        // return episode;
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

/*function index(req, res) {
  console.log(req.user._id)
Appointment.find({'userId': req.user._id}, function(err, appointments) {
 Episode.find

res.render('appointments/index', { title: 'All Appointments', appointments });
  });
} */