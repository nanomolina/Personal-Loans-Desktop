'use strict';

angular
  .module('entity')
  .factory('Investment', Investment);

Investment.$inject = ['$http'];

function Investment($http) {
  var service = {
    getList: getList,
    getTotal: getTotal,
    getOptions: getOptions,
    create: create,
    get: get,
    remove: remove,
  }

  return service
  ////////////

  // GET - LIST
  function getList(id, query) {
    return $http.get(
      "entity/associations/"+id+"/investments/",
      {
        params: query,
      }
    )
  }

  // GET - TOTAL
  function getTotal(id, query) {
    return $http.get(
      "entity/associations/"+id+"/investments/total/",
      {
        params: query,
      }
    )
  }

  // OPTIONS
  function getOptions(id) {
    return $http({method: "OPTIONS", url: "entity/associations/"+id+"/investments/"});
  }

  // POST - CREATE
  function create(id, data) {
    return $http.post("entity/associations/"+id+"/investments/", data);
  }

  //  GET - RETRIEVE
  function get(assoc_id, inv_id) {
    return $http.get("entity/associations/"+assoc_id+"/investment/"+inv_id+"/");
  }

  // DELETE - DESTROY
  function remove(assoc_id, inv_id) {
    return $http.delete("entity/associations/"+assoc_id+"/investment/"+inv_id+"/");
  }

}
