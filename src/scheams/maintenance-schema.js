const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    mode: Boolean
})

module.exports = mongoose.model('maintenance', Schema)