
let path = require('path');

// Routes
module.exports = function(app) {

    app.get('/signup', function(req, res) {
        res.render('signup');
    });

    app.get('/cms', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/cms.html'));
    });

    app.get('/index', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/authors', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/author-manager.html'));
    });

};
