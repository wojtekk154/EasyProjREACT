const express = require('express');
let app = express();
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var _ = require('lodash');

const Task = require('../models/task.model');

exports.query = (req, res) => {
    Task.find({project: req.query.project}, (err, tasks) => {
        if (err) return res.status(404).send('Not Fount');
        var sorted = _.orderBy(tasks, ['index'], ['asc']);
        res.json(sorted);
    })
};


exports.getTask = (req, res) => {
    Task.findOne({_id: req.params.id}, (err, task) => {
        if (err) return res.status(404).send('Not Fount');
        res.json(task);
    })
};


exports.createTask = (req, res) => {
    let task = new Task({
        name: req.body.name,
        description: req.body.description,
        priority: req.body.priority,
        index: req.body.index ? req.body.index : null,
        project: req.body.project ? req.body.project : null,
        sprint: req.body.sprint ? req.body.sprint : null,
        assigned: req.body.assigned ? req.body.assigned : null,
        status: req.body.status ? req.body.status : null,
        estimate: req.body.estimate ? req.body.estimate : null,
        worked: req.body.worked ? req.body.worked : null,
        kind: req.body.kind ? req.body.kind : null
    });

    task.save((err, t) => {
        if (err) return res.status(400).send(err.errmsg);
        return res.json(t);
    });
}

exports.updateTask = (req, res) => {
    Task.findOne({_id: req.params.id}, (err, task) => {
        if (err) return res.status(400).send(err.errmsg);
        if (!task) {
            return res.status(404).send({
                message: "Project not found!"
            });
        }

        task.name = req.body.name ? req.body.name : task.name;
        task.description = req.body.description ? req.body.description : task.description;
        task.priority = req.body.priority ? req.body.priority : task.priority;
        task.index = req.body.index ? req.body.index : task.index;
        task.project = req.body.project ? req.body.project : task.project;
        task.sprint = req.body.sprint ? req.body.sprint : task.sprint;
        task.assigned = req.body.assigned ? req.body.assigned : task.assigned;
        task.status = req.body.status ? req.body.status : task.status;
        task.estimate = req.body.estimate ? req.body.estimate : task.estimate;
        task.worked = req.body.worked ? req.body.worked : task.worked;
        task.kind = req.body.kind ? req.body.kind : task.kind;

        task.save((err, t) => {
            if (err) return res.status(400).send(err.errmsg);
            if (!t) {
                return res.status(404).send({
                    message: "Project not found!"
                });
            }
            return res.json(t);
        });
    })

}

exports.removeTask = (req, res) => {
    Task.remove({_id: req.params.id}, (err, task) => {
        if (err) return res.status(404).send('Not Fount');
        return res.json({});
    })
}