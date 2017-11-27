var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Task', new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    index: {
        type: Number,
        required: true
    },
    project:  {type: Schema.Types.ObjectId, ref: 'Project'},
    sprint: {type: Schema.Types.ObjectId, ref: 'Sprint'},
    assigned: {
        type: Object,
    },
    status: {
        type: Number,
        required: true
    },
    estimate: {
        type: String,
    },
    worked: {
        type: String,
    },
    kind: {
        type: Number,
        required: true
    },
}));
