/*
* This is the controller for the GameRoom in which we manage the initial view when arriving at OpenConsole.
* GameRoom receives input from the controller and processes it accordingly on screen.
*/
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
	
/**
 * GameRoom Schema
 * With current design the only thing that would be logged would be
 */
var GameRoomSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    group: {
        type: String,
        default: 'Standard'
    }
});

/**
 * Validations
 */
GameRoomSchema.path('group').validate(function(group) {
    return group.length;
}, 'Title cannot be blank');

mongoose.model('GameRoom', GameRoomSchema);