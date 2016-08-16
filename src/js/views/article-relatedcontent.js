var _ = require('lodash');
var $ = require('jquery');

var ArticleRelatedContent = {
  init: function (el) {
    this.el = el;
    this.$el = $(el);

    if(window.matchMedia && window.matchMedia("(max-width: 767px)").matches) {
      this.setupMobileScroll();
    }

    this.$showButton = this.$el.find("#open-button");
    this.$showButton.click(_.bind(this.onCloseClick, this));
    this.$hideButton = this.$el.find("#close-button");
    this.$hideButton.click(_.bind(this.onCloseClick, this));

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

  onCloseClick: function (e) {
    e.preventDefault();
    var _this = this;

    if(!this.$el.hasClass("aside--hidden")) {
      this.w = this.$el.width();
      this.$el.addClass("aside--hidden");
      this.$el.animate({width: '2%'}, 300, "linear", function () {
        _this.$hideButton.hide();
        _this.$showButton.show();
        setTimeout(function() {
            _this.$showButton.animate({right: -(_this.$showButton.outerWidth())}, 150);
        },200);

      });
    } else {
      this.$showButton.hide();
      this.$hideButton.show();
      this.$el.animate({width: '30%'}, 300, "linear", function () {

        _this.$el.removeClass("aside--hidden");
      });
    }
  }
}

module.exports = ArticleRelatedContent;
