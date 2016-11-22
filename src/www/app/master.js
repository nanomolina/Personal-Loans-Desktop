'use strict';

angular
  .module('personalLoans')
  .controller('MasterCtrl', MasterCtrl);

MasterCtrl.$inject = ['Association', '$scope', '$location', '$mdSidenav', '$routeParams', '$timeout'];

function MasterCtrl(Association, $scope, $location, $mdSidenav, $routeParams, $timeout) {
    var vm = this;

    vm.loading = false;
    vm.menu_loading = false;
    vm.menu = [];
    vm.admin = [
      {
        link: '#/logout',
        title: 'Cerrar Sesión',
        icon: 'content/img/business/logout.svg'
      },
    ];
    vm.toolbar = {title: '', icon: ''};
    vm.profile = {};
    vm.isSidenavOpen = false;
    vm.toggleLeftMenu = toggleLeftMenu;
    vm.updateSideNav = updateSideNav;
    vm.association = {};
    vm.content_menu = [
      {
        link : '#/association',
        title: 'Asociaciones',
        icon: 'content/img/business/cityscape.svg'
      },
    ];

    // INIT
    updateSideNav();

    // PUBLIC FUNCTIONS
    function toggleLeftMenu() {
      $mdSidenav('left').toggle();
    }

    // PRIVATE FUNCTIONS

    function updateSideNav() {
      vm.menu_loading = false;
      var id = $routeParams.associationId;
      if (id !== undefined) {
        Association.get(id)
        .then(function(response) {
          vm.association = response.data;
        });
        vm.menu = [
            {
              link : '#/association/'+id+'/members',
              title: 'Inversores',
              icon: 'content/img/business/diagram.svg'
            },
            {
              link : '#/association/'+id+'/loans',
              title: 'Prestamos',
              icon: 'content/img/business/money.svg'
            },
            {
              link : '#/association/'+id+'/monthly_resume',
              title: 'Amembe',
              icon: 'content/img/business/receipt.svg'
            },
            {
              link : '#/association/'+id+'/revenue',
              title: 'Ganancias',
              icon: 'content/img/business/get-money.svg'
            },
            {
              link : '#/association/'+id+'/config',
              title: 'Configuración',
              icon: 'content/img/business/justice.svg'
            },
        ];
      }
    }
}
