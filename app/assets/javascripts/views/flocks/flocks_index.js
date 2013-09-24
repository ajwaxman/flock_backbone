FlockBackend.Views.FlocksIndex = Backbone.View.extend({

  template: JST['flocks/index'],

  events: {
    'submit #new_flock': 'createFlock'
  },
  
  initialize: function(){
    this.collection.on('reset', this.render, this);
    this.collection.on('sortByField', this.render, this);
  },

  render: function(){
    $(this.el).html(this.template({flocks: this.collection}));
    return this;
  },

  createFlock: function(event){
    event.preventDefault();
    var Flock = Parse.Object.extend("Flocks");
    var flock = new Flock();
    flock.set("What", $('#new_flock_What').val())
    flock.save();
  }

});
