var _ = require('lodash');
var $ = require('jquery');

var ArticleRelatedContent = {
  init: function (el) {
    this.el = el;
    this.$el = $(el);

    if(window.matchMedia && window.matchMedia("(max-width: 767px)").matches) {
      this.setupMobileScroll();
    }
    this.$articleBody = this.$el.closest(".article__body");
    this.$toggleButton = this.$el.find("#toggle-button");
    this.$toggleButton.click(_.bind(this.onToggleClick, this));

  },

  setupMobileScroll: function() {
    var $faderLeft = this.$el.find(".fader--left")
    var $faderRight = this.$el.find(".fader--right")
    this.$scrollContent = this.$el.find(".related-content__list");
    var scrollWidth = this.$scrollContent[0].scrollWidth - $(window).width();
    this.$scrollContent.on('scroll', function (e) {
      $faderLeft.css('opacity', Math.min(1, $(this).scrollLeft()/100));
      $faderRight.css('opacity', Math.min(1, (scrollWidth - $(this).scrollLeft())/100));
    });
  },

  onToggleClick: function (e) {
    e.preventDefault();
    var _this = this;

    if(!this.$articleBody.hasClass("aside--collapsed")) {
      // this.$el.addClass("aside--hidden");
      this.$articleBody.addClass('aside--collapsed');
      // this.w = this.$el.width();
      // this.$el.addClass("aside--hidden");
      // this.$el.animate({flexBasis: '2%'}, {duration: 200, easing: "linear", complete: function () {
      //   _this.$hideButton.hide();
      //   _this.$showButton.show();
      //   setTimeout(function() {
      //       _this.$showButton.animate({right: -(_this.$showButton.outerWidth())}, 150);
      //   },200);
      //
      // }});
    } else {
      // this.$el.removeClass("aside--hidden");
      this.$articleBody.removeClass('aside--collapsed');
      // this.$showButton.hide();
      // this.$hideButton.show();
      // this.$el.animate({flexBasis: '30%'}, {duration: 200, easing: "linear", complete: function () {
      //   _this.$el.removeClass("aside--hidden");
      // }});
    }
  }
}

module.exports = ArticleRelatedContent;
