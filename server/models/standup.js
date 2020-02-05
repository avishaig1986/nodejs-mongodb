const mongoose = require('mongoose')

const standupSchema = new mongoose.Schema({
  teamMemberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teamMembers'
  },
  teamMember: { type: String },
  project: { type: String },
  workYesterday: { type: String },
  workToday: { type: String },
  impediment: { type: String }, 
  createdOn: { type: Date, default: Date.now }
  })

module.exports = mongoose.model('Standup', standupSchema)

/*
// Disablןמע _id schema example
  const noIdSchema = new mongoose.Schema (
    {name: String}, {_id: false})


  // User Schema.add() example
  let exampleSchema = new mongoose.Schema
//  exampleSchema.add({teamMember: String})

// Changing Schema
const useFullName = true // Some business logic here
if (useFullName){
  exampleSchema.add({
    teamMember: {
      first: String,
      last: String
    }
  })
} else {
  exampleSchema.add({teamMember: String})
}

*/