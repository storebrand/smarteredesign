var _ = require('lodash');
var $ = require('jquery');

var ArticleRelatedContent = {
  init: function (el) {
    this.$el = $(el);

    // if(window.matchMedia && window.matchMedia("(max-width: 767px)").matches) {
    //   this.setupMobileScroll();
    // }
    this.$articleBody = $(".article__body");
    this.$toggleButton = this.$el.find(".related__toggle-button");
    this.$toggleButton.click(_.bind(this.onToggleClick, this));

  },

  // setupMobileScroll: function() {
  //   var $faderLeft = this.$el.find(".fader--left")
  //   var $faderRight = this.$el.find(".fader--right")
  //   this.$scrollContent = this.$el.find(".related-content__list");
  //   var scrollWidth = this.$scrollContent[0].scrollWidth - $(window).width();
  //   this.$scrollContent.on('scroll', function (e) {
  //     $faderLeft.css('opacity', Math.min(1, $(this).scrollLeft()/100));
  //     $faderRight.css('opacity', Math.min(1, (scrollWidth - $(this).scrollLeft())/100));
  //   });
  // },

  onToggleClick: function (e) {
    e.preventDefault();
    console.log("toggle click");
    var _this = this;

    if(!this.$articleBody.hasClass("related--collapsed")) {
      this.$articleBody.addClass('related--collapsed');
    } else {
      this.$articleBody.removeClass('related--collapsed');
    }
  }
}

module.exports = ArticleRelatedContent;
