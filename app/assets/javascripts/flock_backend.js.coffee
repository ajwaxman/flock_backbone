window.FlockBackend =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: ->
    new FlockBackend.Routers.Flocks
    Backbone.history.start()

$(document).ready ->
  FlockBackend.initialize()
