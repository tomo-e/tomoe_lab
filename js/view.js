var PostView = Backbone.View.extend({
  el: '#post_list1',
  collection: new PostCollection(),
  initialize: function() {
    var self = this;
    var posts = new PostCollection();

    self.collection.fetch({
      success: function() {
        _.each(self.collection.models, function(model) {
            var title = model.get('title');
            var $li = $('<li>').html(
              model.get('title')
            );
            $('#post_list1').append($li);
        });
      }
    });
  }
});