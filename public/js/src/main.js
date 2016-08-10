var App = {
  init: function(obj) {

    if(obj.type) {
      switch (obj.type) {
        case "article":
          ArticleView.init(document.getElementById('article'));
          break;
        default:

      }
    }

    Header.init(document.getElementById('site-header'));
  }
}
