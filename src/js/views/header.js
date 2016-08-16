var $ = require('jquery');
var _ = require('lodash');

var Header = {
  init: function (el) {
    this.$el = $(el);

    this.$searchField = this.$el.find('#search');

    this.$searchField.on('focus', _.bind(this.onFieldFocus, this));
    // this.$menu = this.$el.find('.menu');
    this.$el.find('.icon-icon_menu-search').click(_.bind(this.showMenu, this));

  },

  onFieldFocus: function (e) {
    this.showMenu();
  },

  onFieldBlur: function (e) {
    this.hideMenu();
  },

  showMenu: function () {
    if(this.$el.hasClass('menu--open')) return;
    if(!this.$searchField.is(':focus')) this.$searchField.focus();
    this.$searchField.on('blur', _.bind(this.onFieldBlur, this));
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
