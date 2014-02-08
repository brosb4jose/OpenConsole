'user strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
	
/**
 * GameRoom Schema
 * With current design the only thing that would be logged would be
 */
var ScoreSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    GameID: {
        type: Number
    },
	UserID: {
		type: Number
	},
	Score: {
		gameType: String, 
		statname: String, 
		stat: Number
	}
});

/**
 * Validations

GameRoomSchema.path('Score').validate(function(score) {
	console.log("Added Score: "+ score.stat );
	if(score.gameType && score.statname && score.stat){
		return true;
	}
    return false;
}, 'Invalid Score');
GameRoomSchema.path('GameID').validate(function(GameID) {
	if(GameID){
		return true;
	}
    return false;
}, 'Invalid Score');
GameRoomSchema.path('Score').validate(function(UserID) {
	if(UserID){
		return true;
	}
    return false;
}, 'Invalid Score');
*/

/**
 * Statics
 */

mongoose.model('Score', ScoreSchema);