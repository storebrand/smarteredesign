var ArticleRelatedContent = {
  init: function (el) {
    this.el = el;
    this.$el = $(el);

    var $faderLeft = this.$el.find(".fader--left")
    var $faderRight = this.$el.find(".fader--right")
    this.$scrollContent = this.$el.find(".related-content__list");
    var scrollWidth = this.$scrollContent[0].scrollWidth - $(window).width();
    this.$scrollContent.on('scroll', function (e) {
      $faderLeft.css('opacity', Math.min(1, $(this).scrollLeft()/100));
      $faderRight.css('opacity', Math.min(1, (scrollWidth - $(this).scrollLeft())/100));
    })

  }
}
