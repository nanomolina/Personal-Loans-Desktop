'use strict';

angular
  .module('personalLoans')
  .controller('ConsoleCtrl', ConsoleCtrl);

ConsoleCtrl.$inject = ['$routeParams', '$location', '$scope'];

function ConsoleCtrl($routeParams, $location, $scope) {
    var vm = this;
    var id = $routeParams.associationId;

    $scope.master.toolbar = {title: 'Console', icon: 'view_list'}
    vm.sections = [
        {
          title: 'Inversores',
          icon: 'content/img/business/diagram.svg',
          href : '#/association/' + id + '/members',
        },
        {
          title: 'Prestamos',
          icon: 'content/img/business/money.svg',
          href : '#/association/' + id + '/loans',
        },
        {
          title: 'Amembe',
          icon: 'content/img/business/receipt.svg',
          href : '#/association/' + id + '/monthly_resume',
        },
        {
          title: 'Devolucion',
          icon: 'content/img/business/get-money.svg',
          href : '#/association/' + id + '/revenue',
        },
        {
          title: 'Configuración',
          icon: 'content/img/business/justice.svg',
          href : '#/association/' + id + '/config',
        },
    ];
    vm.general_loading = false;
    vm.showLoader = showLoader;

    // INIT
    $scope.master.updateSideNav();

    // PUBLIC FUNCTIONS
    function showLoader() {
      vm.general_loading = true
    }
}
