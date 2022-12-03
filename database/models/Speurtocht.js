const mongoose = require('mongoose');

const SpeurtochtSchema = new mongoose.Schema({
vragenForm: {
    type: String,
    require: true,
},
antwoorden: {
    type: String,
    require: true,
},
correcteAntwoord: {
    type: String,
    require: true,
},

});

const Speurtocht = mongoose.model('SpeurtochtData', SpeurtochtSchema);
module.exports = Speurtocht;

