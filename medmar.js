if (Meteor.isClient) {
  // Prods = new Meteor.Collection("prods");

  Template.main.producers = function () {
    
    return Prods.find();
  }
}

if (Meteor.isServer) {
  
  Meteor.startup(function () {
    // Prods = new Meteor.Collections('prods');


  //  Template.main.prods = function(){
  //   return Prods.find().fetch().map(function(it){ return it.Name; });
  // };
  });
}
