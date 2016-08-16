var _ = require('lodash');
var $ = require('jquery');
var ArticleView = require('./views/article');
var Header = require('./views/header');

var App = {
  init: function(obj) {
    console.log("Hello world");

    if(obj.type) {
      switch (obj.type) {
        case "article":
        case "report":
          ArticleView.init(document.getElementById('article'));
          break;
        default:

      }
    }

    Header.init(document.getElementById('site-header'));
    var throttled = _.throttle(_.bind(Header.hideMenu, Header), 500);
    $(window).on('scroll', throttled);
  }
}

module.exports = App;

App.init(window.pageObject);
