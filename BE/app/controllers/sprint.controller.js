const express = require('express');
let app = express();
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var _ = require('lodash');
const Sprint = require('../models/sprint.model');

exports.query = (req, res) => {
    Sprint.find({project: req.query.project}, (err, sprints) => {
        let temp = _.orderBy(sprints, 'start_date', 'desc')
        console.log(temp)
        if (err) return res.status(404).send('Not Fount');
        res.json(temp);
    })
};


exports.getSprint = (req, res) => {
    console.log(params);
    Sprint.findOne({}, (err, project) => {
        if (err) return res.status(404).send('Not Fount');
        res.json(project);
    })
};


exports.createSprint = (req, res) => {
    let sprint = new Sprint({
        name: req.body.name,
        description: req.body.description,
        project: req.body.project,
        status: req.body.status,
        start_date: new Date(req.body['start_date']),
        end_date: new Date(req.body['end_date'])
    });

    sprint.save((err, sprint) => {
        if (err) return res.status(400).send(err.errmsg);
        return res.json(sprint);
    });
};

exports.updateSprint = (req, res) => {
    Sprint.findOne({_id: req.params.id}, (err, sprint) => {
        if (err) return res.status(400).send(err.errmsg);
        if (!sprint) {
            return res.status(404).send({
                message: "Project not found!"
            });
        }

        sprint.name = req.body.name ? req.body.name : sprint.name;
        sprint.description = req.body.description ? req.body.description : sprint.description;
        sprint.project_id = req.body.project_id ? req.body.project_id : sprint.project_id;
        sprint.status = req.body.status ? req.body.status : sprint.status;
        sprint.start_date = req.body.start_date ? req.body.start_date : sprint.start_date;
        sprint.end_date = req.body.end_date ? req.body.end_date : sprint.end_date;

        sprint.save((err, sprint) => {
            if (err) return res.status(400).send(err.errmsg);
            if (!sprint) {
                return res.status(404).send({
                    message: "Project not found!"
                });
            }
            return res.json(project);
        });
    })

};

exports.removeSprint = (req, res) => {
    Sprint.remove({_id: req.params.id}, (err, sprint) => {
        if (err) return res.status(404).send('Not Fount');
        return res.json({});
    })
}