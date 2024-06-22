const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    contentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content',
        required: true,
    },
    progress: {
        type: Number,
        required: true,
    },
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
