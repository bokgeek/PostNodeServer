var mongoose = require('mongoose');
var Info = mongoose.model('Info');

//GET - Return all infos
exports.findAll = function (req, res) {
    Info.find(function (err, infos) {
        if (err) res.send(500, err.message);
        console.log('GET /infos');
        res.status(200).jsonp(infos);
    });
};

//GET - Return a info with specified ID
exports.findById = function (req, res) {
    Info.findById(req.params.id, function (err, info) {
        if (err) return res.send(500, err.message);
        console.log('GET /infos/' + req.params.id);
        res.status(200).jsonp(info);
    });
};

//POST - Insert a new info
exports.add = function (req, res) {
    console.log('POST');
    console.log(req.body);
    var info = new Info({
        label: req.body.label,
        content: req.body.content,
        user: req.body.user,
        device: req.body.device
    });

    info.save(function (err, info) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(info);
    });
};

//PUT - Update a info already exists
exports.update = function (req, res) {
    Info.findById(req.params.id, function (err, info) {
        info.label = req.body.label;
        info.content = req.body.content;
        info.user = req.body.user;
        info.device = req.body.device;

        info.save(function (err) {
            if (err) return res.send(500, err.message);
            res.status(200).jsonp(info);
        });
    });
};

//DELETE - Delete a info with specified ID
exports.delete = function (req, res) {
    Info.findById(req.params.id, function (err, info) {
        info.remove(function (err) {
            if (err) return res.send(500, err.message);
            res.json({ message: 'Successfully deleted' });
        });
    });
};

//DELETEALL - Delete ll registers
exports.deleteAll = function (req, res) {

    Info.remove(function (err) {
        if (err) return res.send(500, err.message);
        res.json({ message: 'Successfully deleted all' });
    });
};
