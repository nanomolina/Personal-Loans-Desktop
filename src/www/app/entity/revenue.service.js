'use strict';

angular
  .module('entity')
  .factory('Revenue', Revenue);

Revenue.$inject = ['$http', '$cookies'];

function Revenue($http, $cookies) {
  var service = {
    getList: getList,
    getTotal: getTotal,
  }

  return service
  ////////////

  // GET - LIST
  function getList(id, query) {
    return $http.get(
      "entity/associations/"+id+"/revenue/",
      {
        params: query,
      }
    )
  }

  // GET - TOTAL
  function getTotal(id, query) {
    return $http.get(
      "entity/associations/"+id+"/revenue/total/",
      {
        params: query,
      }
    )
  }
}
