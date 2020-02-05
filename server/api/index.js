/*
Three routes will be required -
Standup notes
various project the team reporting work for
team members
*/
// eslint-disable-next-line no-undef
const express = require('express')
const router = express.Router()

require('./routes/standup')(router)
require('./routes/projects')(router)
require('./routes/team')(router)

module.exports = router