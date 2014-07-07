if (Meteor.isClient) {
  
  Template.table.producers = function () {
    
    return Prods.find();

  };

  Template.backlog.requests = function () {
    
    return Reqs.find();
  };

}