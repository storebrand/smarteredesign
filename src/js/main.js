var ArticleView = require('./views/article');
var Header = require('./views/header');

var App = {
  init: function(obj) {
    console.log("Hello world");

    if(obj.type) {
      switch (obj.type) {
        case "article":
          ArticleView.init(document.getElementById('article'));
          break;
        default:

      }
    }

    Header.init(document.getElementById('site-header'));
  }
}

module.exports = App;

App.init(window.pageObject);
