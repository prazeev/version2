var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var spaceSchema = new Schema({
  Name:{type:String,required:"Enter name"},
  numOfServices:{type:String,required:"Enter number of services"},
  Status:{type:Boolean,default:false},
  totalTickets:{type:String,required:"Enter total tickets"},
  availableTickets:{type:String,required:"Enter available tickets"},
  nowServing:{type:String,required:"Enter now serving"},
  createdBy:{type:String,default:"Admin"},
  createdOn:{type:Date,default:Date.now()},
  lastModifiedOn:{type:Date,default:Date.now()}
})
exports.module = mongoose.model('Spaces',spaceSchema);
