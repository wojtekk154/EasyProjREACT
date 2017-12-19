var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Project', new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    project_key: {
        type: String,
        required: true
    },
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    owner_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    backlog: [{type: Schema.Types.ObjectId, ref: 'Task'}],
    sprints: [{type: Schema.Types.ObjectId, ref: 'Sprint'}],
    cooperators: [{
        email: { type: String, required: true },
        image: { type: String, required: true },
        id: {type: Schema.Types.ObjectId, ref: 'User'}
    }]
}));