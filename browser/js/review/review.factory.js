app.factory('ReviewFactory', function ($http) {

  var ReviewFactory = {};

  ReviewFactory.fetchAll = function (args) {
    return $http.get('/api/reviews', {params: args})
    .then(function (response) { return response.data; });
  };

  ReviewFactory.create = function (data) {
    return $http.post('/api/reviews/', data)
    .then(function (response) {
     return response.data;
   })
  };

  return ReviewFactory;
});
