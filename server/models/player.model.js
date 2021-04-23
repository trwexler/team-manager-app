const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({

    name: { 
        type: String,
        // required: [
        //     true, 
        //     "Name is required!"
        // ]
    },

    position: { 
        type: String,
        // required: [
        //     true,
        //     "Position is required!"
        // ],
        enum: [
            "PG",
            "SG",
            "SF",
            "PF",
            "C"
        ]
    },

    day: { 
        type: Number,
        // required: [
        //     true,
        //     "Position is required!"
        // ],
        enum: [
            0,
            1,
            2
        ]
    },

    dayOneStatus: {
        type: String,
        default:"Undecided",
        enum:[
            "Undecided",
            "Playing",
            "Not Playing"
        ] 
    },

    dayTwoStatus: {
        type: String,
        default:"Undecided",
        enum:[
            "Undecided",
            "Playing",
            "Not Playing"
        ] 
    },

    dayThreeStatus: {
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

