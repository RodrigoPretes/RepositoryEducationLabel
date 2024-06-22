const Progress = require('../models/progressModel');

exports.recordProgress = async (req, res) => {
    const progress = new Progress(req.body);
    try {
        await progress.save();
        res.status(201).send(progress);
    } catch (e) {
        res.status(400).send(e);
    }
};

