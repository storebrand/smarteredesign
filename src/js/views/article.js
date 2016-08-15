var ArticleRelatedContent = require('./article-relatedcontent');

var ArticleView = {
  init: function (el) {

    this.el = el;
    this.$el = $(el);

    if(this.$el.find(".article__aside")) {
      ArticleRelatedContent.init(document.getElementById('article-related-content'));
    }
  }
}

module.exports = ArticleView;
