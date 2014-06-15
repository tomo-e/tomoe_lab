var PostView = Backbone.View.extend({
  el: '#post_list1',
  collection: new PostCollection(),
  initialize: function() {
    this.collection.fetch({
      success: function() {

      console.log(this.collection);
      debugger;

        _.each(this.collection, function(model) {
            var test = this.collection.get('title');

            console.log('test');
            var li = $('<li>').html(
              this.collection.get('title')
            );
            $('#post_list1').append($li);
        });
      }
    });
  }
});