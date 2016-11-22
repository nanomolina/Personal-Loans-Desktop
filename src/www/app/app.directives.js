'use strict';

angular
  .module('personalLoans')
  .directive("warrantexist", warrantexist)
  .directive("authexist", authexist);

function warrantexist() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attributes, ngModel) {
      ngModel.$validators.warrantexist = function(modelValue) {
        return scope.vm.errors.warrant.indexOf(modelValue) === -1;
      }
    }
  };
}

function authexist() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, element, attributes, ngModel) {
      ngModel.$validators.authexist = function(modelValue) {
        return scope.vm.errors.authorization.indexOf(modelValue) === -1;
      }
    }
  };
}
