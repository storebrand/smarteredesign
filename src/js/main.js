var _ = require('lodash');
var $ = require('jquery');
var ArticleView = require('./views/article');
var Header = require('./views/header');

var App = {
  init: function(obj) {

    var couldBeLongRead = false;

    if(obj.type) {
      switch (obj.type) {
        case "article":
        case "report":
        case "info-article":
        case "article-comment":
          couldBeLongRead = true;
          console.log("is longread");
          ArticleView.init(document.getElementById('article'), obj);
          break;
        case "tips":
          ArticleView.init(document.getElementById('article'), obj);
          break;
        default:

      }
    }

    Header.init(document.getElementById('site-header'));
    var throttled = _.throttle(_.bind(Header.hideMenu, Header), 500);
    var delta = 0;
    var height = $(window).height();
    var prev = window.scrollY;
    var $hsp = $('.header-scroll-progress');
    var $article = $('#article');
    $(window).on('scroll', function(e) {
      delta += (prev - window.scrollY);
      prev = window.scrollY;

      if(Math.abs(delta) > 50) {
        throttled();
        delta = 0;
      }

      if(couldBeLongRead) {
        $hsp.width(Math.min(($(window).scrollTop()/($article.height() - $(window).height())*100), 100)+"%");
      }

    });
  }
}

module.exports = App;

App.init(window.pageObject);
