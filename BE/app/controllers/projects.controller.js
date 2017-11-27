const express = require('express');
let app = express();
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Project = require('../models/project.model');

exports.queryProjects = (req, res) => {
    Project.find({}, (err, projects) => {
        if (err) return res.status(404).send('Not Fount');
        let projs = [];
        projs = projects.filter(pro => pro.cooperators.indexOf(req.query.user) !== -1);
        res.json(projs);
    })
}


exports.getProject = (req, res) => {
    Project.findOne({_id: req.params.id}, (err, project) => {
        if (err) return res.status(404).send('Not Fount');
        res.json(project);
    })
}


exports.createProject = (req, res) => {
    let project = new Project({
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner,
        project_key: req.body.project_key,
        owner_name: req.body.owner_name,
        status: req.body.status,
        backloog: [],
        sprints: [],
        cooperators: [req.body.cooperator]
    });

    project.save((err, project) => {
        if (err) return res.status(400).send(err.errmsg);
        return res.json(project);
    });
}

exports.updateProject = (req, res) => {
    Project.findOne({_id: req.params.id}, (err, project) => {
        if (err) return res.status(400).send(err.errmsg);
        if (!project) {
            return res.status(404).send({
                message: "Project not found!"
            });
        }

        project.name = req.body.name ? req.body.name : project.name;
        project.description = req.body.description ? req.body.description : project.description;
        project.owner_id = req.body.owner_id ? req.body.owner_id : project.owner_id;
        project.status = req.body.status ? req.body.status : project.status;
        project.backloog = req.body.backloog ? [...project.backloog, req.body.backloog] : project.backloog;
        project.sprints = req.body.sprint ? [...project.sprints, req.body.sprint] : project.sprints;
        project.cooperators = req.body.cooperator ? [...project.cooperators, req.body.cooperator] : project.cooperators;

        project.save((err, project) => {
            if (err) return res.status(400).send(err.errmsg);
            if (!project) {
                return res.status(404).send({
                    message: "Project not found!"
                });
            }
            return res.json(project);
        });
    })

}

exports.removeProject = (req, res) => {
    Project.remove({_id: req.params.id}, (err, project) => {
        if (err) return res.status(404).send('Not Fount');
        return res.json({});
    })
}