FlockBackend.Collections.Flocks = Backbone.Collection.extend({

  _parse_class_name: "Flocks",
  sort_key: 'id',
  comparator: function(item){
    return item.get(this.sort_key)
  },
  sortByField: function(fieldName){
    this.sort_key = fieldName;
    this.sort();
  }

});
