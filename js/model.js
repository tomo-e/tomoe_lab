var PostModel = Backbone.Model.extend({
});

var PostCollection = Backbone.Collection.extend({
  model: PostModel,
  url: '',
  parse: function(data) {
    //urlの返り値のpostsの部分をCollectionとする
    return data.response.posts;
  }
});