var PostView = Backbone.View.extend({
  el: '#post_list1',
  collection: new PostCollection(),
  initialize: function() {
    var self = this;
    self.collection.fetch({
      success: function() {
        _.each(self.collection, function(model) {

          console.log(self.collection);
          console.log(model);

        });
      }
    });
  }
});