class FlockBackend.Routers.Flocks extends Backbone.Router
  routes:
    '': 'index'
    'flocks/:id': 'show'

  initialize: ->
    Parse.initialize("InMNz5UfTlwLEN5ffUfwRqZIgEyUW1b8oXhOGbwW", "eYdLkgKXyyLTu1rIXdpUxsjUs3jso2vk541KKblM")
    Flock = Parse.Object.extend({
      className: "Flocks"
    });
    FlockBackend.Collections.Flocks = Parse.Collection.extend({
        model: Flock
    });
    @collection = new FlockBackend.Collections.Flocks()
    @collection.fetch()
                
  index: ->
    view = new FlockBackend.Views.FlocksIndex(collection: @Collections)
    $('#container').html(view.render().el)

  show: (id) ->
    alert "Flock #{id}"