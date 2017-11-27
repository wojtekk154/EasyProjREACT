var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Sprint', new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    project: {type: Schema.Types.ObjectId, ref: 'Project'},
    status: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    }
}));








