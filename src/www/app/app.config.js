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
    templateUrl: 'entity/templates/association.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  .when('/login', {
    templateUrl: 'core/login.html',
  })
  .when('/logout', {
    templateUrl: 'core/logout.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  // ENTITY
  .when('/investors', {
    templateUrl: 'entity/templates/investors.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  .when('/association', {
    templateUrl: 'entity/templates/association.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  .when('/association/:associationId/console', {
    templateUrl: 'entity/templates/console.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  .when('/association/:associationId/members', {
    templateUrl: 'entity/templates/members/investors.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  .when('/association/:associationId/loans', {
    templateUrl: 'entity/templates/loan/investments.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  .when('/association/:associationId/monthly_resume', {
    templateUrl: 'entity/templates/loan/monthly_resume.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  .when('/association/:associationId/revenue', {
    templateUrl: 'entity/templates/loan/revenue.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  .when('/association/:associationId/config', {
    templateUrl: 'entity/templates/config/association.html',
    resolve: {
      authenticated: ['authService', function(authService){
        return authService.getUser();
      }],
    }
  })
  .otherwise({
    redirectTo: '/'
  });
}
