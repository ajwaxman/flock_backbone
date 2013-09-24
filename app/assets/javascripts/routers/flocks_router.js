FlockBackend.Routers.Flocks = Backbone.Router.extend({
  routes:{
    '': 'index',
    'flocks/:id': 'show' 
  },
  initialize: function(){
    this.collection = new FlockBackend.Collections.Flocks();
    this.collection.fetch({
      reset: true,
      query: {
        // "What":"Go workout"
      },
      order: "-CreatedAt",
      limit: 10,


    });
    Parse.initialize("qtPnuzn38Stuo5olj3BQ7R2QcLGQNADRoNL89F1U", "eYdLkgKXyyLTu1rIXdpUxsjUs3jso2vk541KKblM");

  },
  index: function(){
    var view = new FlockBackend.Views.FlocksIndex({collection: this.collection});
    $('#container').html(view.render().el);
  },
  show: function(id){
    alert("Flock "+id);
  }
});