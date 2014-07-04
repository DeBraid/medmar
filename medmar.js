if (Meteor.isClient) {
  
  Template.table.producers = function () {
    
    return Prods.find();

  };

}