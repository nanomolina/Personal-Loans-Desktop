'use strict';

angular
  .module('personalLoans')
  .config(materialTheming)
  .config(materialDatepicker)
  .config(routes);


function materialTheming($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('amber')
    .warnPalette('brown')
    .backgroundPalette('grey');
}

function materialDatepicker($mdDateLocaleProvider) {
  $mdDateLocaleProvider.formatDate = function(date) {
   return moment(date).format('DD/MM/YYYY');
  };
}

function routes($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/entity/templates/association.html'
  })
  // ENTITY
  .when('/investors', {
    templateUrl: 'app/entity/templates/investors.html',
  })
  .when('/association', {
    templateUrl: 'app/entity/templates/association.html',
  })
  .when('/association/:associationId/console', {
    templateUrl: 'app/entity/templates/console.html',
  })
  .when('/association/:associationId/members', {
    templateUrl: 'app/entity/templates/members/investors.html',
  })
  .when('/association/:associationId/loans', {
    templateUrl: 'app/entity/templates/loan/investments.html',
  })
  .when('/association/:associationId/monthly_resume', {
    templateUrl: 'app/entity/templates/loan/monthly_resume.html',
  })
  .when('/association/:associationId/revenue', {
    templateUrl: 'app/entity/templates/loan/revenue.html',
  })
  .when('/association/:associationId/config', {
    templateUrl: 'app/entity/templates/config/association.html',
  })
  .otherwise({
    redirectTo: '/'
  });
}
