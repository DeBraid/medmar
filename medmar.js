if (Meteor.isClient) {
  
  Template.table.producers = function () {
    
    return Prods.find();

  };

  Template.news.newsItem = function () {
    
    return Reqs.find();
  };

}