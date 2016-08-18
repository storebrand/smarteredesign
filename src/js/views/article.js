var $ = require('jquery');
var _ = require('lodash');


var ArticleRelatedContent = require('./article-relatedcontent');

var ArticleView = {
  init: function (el, obj) {

    this.el = el;
    this.$el = $(el);
    this.menuHeight = parseInt($('main').css("padding-top"));

    if(this.$el.find(".article__aside")) {
      ArticleRelatedContent.init(document.getElementById('article-related-content'));
    }

    if(obj.type === "report") {
      this.$header = this.$el.find(".article__header");
      $(window).on('resize', _.bind(this.resizeMainImage, this));
      this.resizeMainImage();
    }
  },

  resizeMainImage: function functionName(e) {
    var ratio = Math.min(0.5625, ($(window).height() - this.menuHeight)/$(window).width());
    this.$header.css('padding-bottom', (ratio*100)+"%");
  }
}

module.exports = ArticleView;
