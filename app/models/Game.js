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
var GameSchema = new Schema({
    title: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: String,
        default: 'Anonymous',
        trim: true
    },
	locGame: {
		type: String,
	    default: ""
	},
	group: {
        groupName: [String]
    }
});

/**
 * Validations
 *
GameSchema.path('kind').validate(function(kind) {
    return kind.length;
}, 'Title cannot be blank');
*/
