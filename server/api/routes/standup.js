const Standup = require('../../models/standup')
const mongoose = require('mongoose')

module.exports = function (router) {
  // GET: the 12 newest stand-up meeting notes
  router.get('/standup', function (req, res){
    Standup.find()
      .sort({'createdOn': 1  }) // currently returns in ascending order, if needed descending them 'createdOn': -1  
      .exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding standup meeting notes',
          error: err
        }))
      })

  // GET: by team member Id
  router.get('/standup/:teamMemberId', function(req,res) {
    const query = {
      _teamMemberId: mongoose.Types.ObjectId(req.param.teamMemberId)
    }
    Standup.find(query)
      .sort({ 'createdOn': 1 })
      .exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch (err => res.status(500)
        .json({
          message: 'could not retrieve team member id',
          error: err
        }))
  })
      



  // POST: Get new meeting note
  router.post('/standup', function (req, res){
    let note = new Standup(req.body)
    note.save(function (err, note){
      if (err){
        return res.status(400).json(err);
      }
      return res.status(200).json(note);
    })
  })
}
