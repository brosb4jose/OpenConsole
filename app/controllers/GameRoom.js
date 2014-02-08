/*
* This is the controller for the GameRoom in which we manage the initial view when arriving at OpenConsole.
* GameRoom receives input from the controller and processes it accordingly onto the GameRoomView.
*/
'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    GameRoom = mongoose.model('GameRoom');
	

//loadRoom()
//Creates a GameRoom and Initializes the game room returns GameRoom identifier

//connectPlayer(pid)
//Connects the player to the GameRoom

//startTube()
//initializes the tube and transitions to the Tube