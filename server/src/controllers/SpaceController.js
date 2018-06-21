var express = require('express');
var mongoose = require('mongoose');
var Space = mongoose.model('Spaces');


exports.add_space = function(req,res){
      var newSpace = new Space(req.body)
      newSpace.save((err,task)=>{
        if(err) throw err;
        else res.json(task);
      });
}
exports.delete_space = function(req,res){
  Space.remove({
    _id:req.params.spaceId
  },function(err,task){
    if(err) res.send(err)
    else res.json({task:"Space removed successfully!"})
  })
}
exports.get_space = function(req,res){
  var spaceId = req.params.spaceId;
  Space.findById(spaceId,function(err,task){
    if(err) res.send(err)
    else res.json(task)
  })
}

exports.get_all_spaces = function(req,res){
  Space.find({},function(err,task){
    if(err) res.send(err)
    else res.json(task)
  })
}
