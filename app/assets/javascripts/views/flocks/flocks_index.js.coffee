class FlockBackend.Views.FlocksIndex extends Backbone.View

  template: JST['flocks/index']

  render: ->
    $(@el).html(@template(flocks: @collection))
    this
