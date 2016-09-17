var express = require('express');

var _ = require('lodash');
var nunjucks = require('nunjucks');
var app = express();

app.use(express.static('public'));

var env = nunjucks.configure('app/templates', {
    autoescape: true,
    express: app,
});


app.get('/', function (req, res) {
    var _this = this;

    var data = {type: 'section', id: 'index'};
    res.render('index.html', data);

});

app.get('/report', function (req, res) {
    var _this = this;

    var data = {type: 'report'};
    res.render('report.html', data);

});

app.get('/article', function (req, res) {
    var _this = this;

    var data = {type: 'article'};
    res.render('article.html', data);

});

app.get('/comment', function (req, res) {
    var _this = this;

    var data = {type: 'article-comment'};
    res.render('article-comment.html', data);

});

app.get('/about', function (req, res) {
    var _this = this;

    var data = {type: 'info-article'};
    res.render('article-basic.html', data);

});

app.get('/tips', function (req, res) {
    var _this = this;

    var data = {type: 'tips'};
    res.render('tips.html', data);

});

app.get('/tips/kronologisk', function (req, res) {
    var _this = this;

    var data = {type: 'tips'};
    res.render('tips-chronological.html', data);

});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
