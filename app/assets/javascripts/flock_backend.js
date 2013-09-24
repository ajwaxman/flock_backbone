window.FlockBackend = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new FlockBackend.Routers.Flocks;
    Backbone.history.start();
  }
};

$(document).ready(function(){
  FlockBackend.initialize();
});
