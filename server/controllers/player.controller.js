const Player = require('../models/player.model');    
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
         
module.exports = {

createPlayer: (request, response) => {
    const { name, position } = request.body;
    Player.create({
        name,
        position
    })
        .then(newPlayer =>{ 
            response.json(newPlayer);
            console.log(newPlayer);
        })
        .catch(err =>{ 
            response.status(400).json(err);
            console.log("Problem in createPlayer");
        });
},

viewAllPlayers : (request, response) => {
    Player.find({})
        .then((allPlayers)=> {
            console.log(allPlayers);
            response.json(allPlayers);
            })
        .catch(err =>{
            response.status(400).json(err);
            console.log("Problem in viewAllPlayers");
        })
},

viewOnePlayer : (request, response) => {
    Player.findById(request.params.id)
        .then((viewOne)=> {
            console.log(viewOne);
            response.json(viewOne);
            })
        .catch(err =>{
            response.status(400).json(err);
            console.log("Problem in viewAllPlayers");
        })
},


updatePlayer : (request, response) => {
    Player.findByIdAndUpdate(request.params.id, request.body,
        {
        new: true
    })
        .then((updatedPlayer)=> {
            console.log(updatedPlayer);
            response.json(updatedPlayer);
            })
        .catch(err =>{
            response.status(400).json(err);
            console.log("Problem in updatePlayer");
        })
},

deletePlayer : (request, response) => {
    Player.findByIdAndDelete(request.params.id)
        .then((deletedPlayer)=> {
            console.log(deletedPlayer);
            response.json(deletedPlayer);
            })
        .catch(err =>{
            response.status(400).json(err);
            console.log("Problem in deletedPlayer");
        })
}}