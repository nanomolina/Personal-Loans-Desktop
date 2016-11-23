angular
  .module('personalLoans')
  .filter('divide', divide);

divide.$inject = ['$window'];

function divide($window) {
  return function (numerator, divider) {

    var numerator = angular.isString(numerator) ? $window.Number(numerator) : numerator;
    var divider = angular.isString(divider) ? $window.Number(divider) : divider;

    return (numerator / divider)
  }
}
