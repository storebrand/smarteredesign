var $ = require('jquery');
var _ = require('lodash');

var Header = {
  init: function (el) {
    this.$el = $(el);

    this.$form = this.$el.find('form');
    this.$searchField = this.$el.find('#search');
    this.$searchField.on('focus', _.bind(this.onFieldFocus, this));
    this.$el.find('.icon-icon_menu-search').click(_.bind(this.showMenu, this));

  },

  onFieldFocus: function (e) {
    this.showMenu();
  },

  onFieldBlur: function (e) {
    var _this = this;

    setTimeout(function() {
      var $activeElement = $(document.activeElement);
      if($activeElement.closest('.header__row--menu').length === 0) {
          _this.hideMenu();
      }
    }, 200);


  },

  onFieldKeyUp: function (e) {

    switch (e.keyCode) {
      case 13:
        this.$form.submit();
        break;
      case 27:
        this.hideMenu();
        break;
      default:

    }

  },


  showMenu: function () {
    if(this.$el.hasClass('menu--open')) return;
    if(!this.$searchField.is(':focus')) this.$searchField.focus();
    this.$searchField.on('blur', _.bind(this.onFieldBlur, this));
    this.$searchField.on('keyup', _.bind(this.onFieldKeyUp, this));
    this.$el.addClass('menu--open');
  },

  hideMenu: function () {
    if(!this.$el.hasClass('menu--open')) return;
    this.$searchField.off('blur');
    if(this.$searchField.is(':focus')) this.$searchField.blur();
    this.$el.removeClass('menu--open');
  }
}

module.exports = Header;
