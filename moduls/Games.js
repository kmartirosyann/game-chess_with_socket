const {Schema,model} = require('mongoose')


const GamesSchema = new Schema({
    piece:['r', 'n', 'b','k', 'q','b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'R', 'N', 'B','K', 'Q', 'B', 'N', 'R'],
    gamesId:{type:String},
    yourGames:{type:Boolean}
})

module.exports = model('Games',GamesSchema)
