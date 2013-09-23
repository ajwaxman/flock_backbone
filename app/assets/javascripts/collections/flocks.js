// class FlockBackend.Collections.Flocks extends Backbone.Collection

//   model: FlockBackend.Models.Flock

$(document).ready(function() {
  Parse.initialize("InMNz5UfTlwLEN5ffUfwRqZIgEyUW1b8oXhOGbwW", "eYdLkgKXyyLTu1rIXdpUxsjUs3jso2vk541KKblM");
  var Flock = Parse.Object.extend({
    className: "Flocks"
  });
  FlockBackend.Collections.Flocks = Parse.Collection.extend({
      model: Flock
  });
})


