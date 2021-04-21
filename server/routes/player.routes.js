const PlayerController = require('../controllers/player.controller');


module.exports = function(app){
    app.get('/api', PlayerController.viewAllPlayers);
    app.post('/api/player', PlayerController.createPlayer);
    app.get('/api/player/:id', PlayerController.viewOnePlayer);
    app.put('/api/player/:id', PlayerController.updatePlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer);
}

