$(function(){
  var likeButton = {
    getLikeUrl: 'http://graph.facebook.com/?id=http://1000ch.net/',

    init: function() {
      this.bind();
    },

    bind: function() {
      this.getCount();
    },

    getCount: function() {
      $.ajax({
        url: this.getLikeUrl,
        type: 'GET',
        dataType: 'jsonp',
        timeout: 10000,
        success: function(num) {
          var shareNum = num.shares;
          $('.btn').text(shareNum);
        },
        error: function() {
          console.log('error');
        }
      });
    }
  }
    
  likeButton.init();
});