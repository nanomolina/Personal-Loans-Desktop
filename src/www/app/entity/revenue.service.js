'use strict';

angular
  .module('entity')
  .factory('Revenue', Revenue);

Revenue.$inject = ['$http'];

function Revenue($http) {
  var service = {
    getList: getList,
    getTotal: getTotal,
  }

  return service
  ////////////

  // GET - LIST
  function getList(id, query) {
    return $http.get("entity/associations/"+id+"/revenue/");
  }

  // GET - TOTAL
  function getTotal(id, query) {
    return $http.get("entity/associations/"+id+"/revenue/total/");
  }
}
