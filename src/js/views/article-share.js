var $ = require('jquery');
var _ = require('lodash');

var ArticleShare = {

  facebookClick: function (e) {
    e.preventDefault();
    console.log("click faceboook");

    FB && FB.ui({
      method: 'share',
      mobile_iframe: true,
      href: document.location.href,
    }, function(response){
      console.dir(response)
    });

  },

  linkedInClick: function (e) {
    e.preventDefault();
    //NOT REALLY NEEDED
    // var payload = {
    //   "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG",
    //   "visibility": {
    //     "code": "anyone"
    //   }
    // };


    IN && IN.API.Raw("/people/~/shares?format=json")
      .method("POST")
      .body(JSON.stringify(payload))
      .result(function (response) {
        console.dir(response)
      })
      .error(function (response) {
        console.dir(response)
      });
  },

  // mailClick: function (e) {
  //   e.preventDefault();
  //
  //   console.log("NOT IN USE");
  // }

  init: function (el) {
    this.$el = $(el);
    this.$el.find('#facebook__link').click(_.bind(this.facebookClick, this))
    this.$el.find('#linkedin__link').click(_.bind(this.linkedInClick, this))
    // this.$el.find('#email__link').click(_.bind(this.mailClick, this));
  }
}

module.exports = ArticleShare;
