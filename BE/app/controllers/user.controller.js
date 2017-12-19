const express = require('express');
let app = express();
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var _ = require('lodash');

const User = require('../models/user.models');


exports.getUserCollections = (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(404).send('Not Fount');
        return res.json(users)
    })
};

exports.searchUser = (req, res) => {
    const a = "test@test.pl";
    console.log(a.match(req.query.searchQuery));
    User.find({
       $or: [
           {email: new RegExp(req.query.searchQuery)},
           {username: new RegExp(req.query.searchQuery)}
       ]
    }).exec((err, users) => {
        if (err) return res.status(404).send('Not Fount');
        return res.json(users)
    })
};