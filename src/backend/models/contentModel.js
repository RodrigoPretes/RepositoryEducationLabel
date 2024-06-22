const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['activity', 'lesson', 'material'],
        required: true,
    },
    contentUrl: {
        type: String,
        required: true,
    },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
