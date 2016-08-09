var Header = {
  init: function (el) {
    this.$el = $(el);
    this.$searchField = this.$el.find('#search');

    console.log("init " + this.$searchField.length);

    this.$searchField.on('focus', $.proxy(this.onFieldFocus, this));
    this.$searchField.on('blur', $.proxy(this.onFieldBlur, this));

    this.$menu = this.$el.find('.menu');
  },

  onFieldFocus: function (e) {
    console.log("focus");
    this.$menu.addClass('menu--open');
  },

  onFieldBlur: function (e) {
    console.log("blur");
    this.$menu.removeClass('menu--open');
  }
}
