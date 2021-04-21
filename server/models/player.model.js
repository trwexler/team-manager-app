const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({

    name: { 
        type: String,
        required: [
            true, 
            "Name is required!"
        ]
    },

    position: { 
        type: String,
        required: [
            true,
            "Position is required!"
        ],
        enum: [
            "PG",
            "SG",
            "SF",
            "PF",
            "C"
        ]
    },

    status: {
        type: String,
        default:"Undecided",
        enum:[
            "Undecided",
            "Playing",
            "Not Playing"
        ] 
    }

}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);

