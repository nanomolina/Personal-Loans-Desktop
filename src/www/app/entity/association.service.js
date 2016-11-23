'use strict';

angular
  .module('entity')
  .factory('Association', Association);

Association.$inject = ['$http'];
function Association($http) {
  var service = {
    getList: getList,
    create: create,
    remove: remove,
    get: get,
    update: update,
  }

  return service
  ////////////

  // GET - LIST
  function getList() {
    return $http.get("entity/associations/")
  }

  // POST - CREATE
  function create(data) {
    return $http.post("entity/associations/", data)
  }

  //  GET - RETRIEVE
  function get(id) {
    return $http.get("entity/associations/"+id+"/")
  }

  // DELETE - DESTROY
  function remove(id) {
    return $http.delete("entity/associations/"+id+"/")
  }

  // PUT - UPDATE
  function update(id, data) {
    return $http.put("entity/associations/"+id+"/",data)
  }
}
