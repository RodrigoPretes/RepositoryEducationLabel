const Content = require('../models/contentModel');

exports.createContent = async (req, res) => {
    const content = new Content(req.body);
    try {
        await content.save();
        res.status(201).send(content);
    } catch (e) {
        res.status(400).send(e);
    }
};

