var ArticleView = {
  init: function (el) {
    this.el = el;
    this.$el = $(el);

    if(this.$el.find(".article__aside")) {

      if(window.matchMedia && window.matchMedia("(max-width: 767px)").matches) {
        ArticleRelatedContent.init(document.getElementById('article-related-content'))
      }
    }
  }
}
