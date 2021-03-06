'use strict';

angular
  .module('personalLoans')
  .controller('RevenueCtrl', RevenueCtrl);

RevenueCtrl.$inject = ['Revenue', 'Investor', '$routeParams', '$scope', '$locale', '$mdDialog', '$mdToast'];

function RevenueCtrl(Revenue, Investor, $routeParams, $scope, $locale, $mdDialog, $mdToast) {
    var vm = this;

    $scope.master.toolbar = {title: 'Ganancias', icon: 'content/img/business/get-money.svg'}
    vm.query = {
      investor: '',
      ordering: '-period',
      limit: 10,
      page: 1
    };
    vm.filter = {
      show: false,
      options: {
        debounce: 500,
        years: [],
        months: [],
      },
      rows: [5, 10, 20, 50, 100],
      form: undefined,
    };
    vm.export = {
      type: '',
    }
    vm.selected = [];
    vm.revenues = [];
    vm.investors = [];
    vm.promise;
    vm.total = {};
    vm.getRevenue = getRevenue;
    vm.showFilterBar = showFilterBar;
    vm.hideFilterBar = hideFilterBar;
    vm.clearFilterBar = clearFilterBar;
    vm.dialogExportExcel = dialogExportExcel;
    vm.dialogExportDoc = dialogExportDoc;

    // INIT
    getInvestors();
    getTotal();
    $scope.master.updateSideNav();

    // PUBLIC FUNCTIONS
    function getRevenue() {
      var id = $routeParams.associationId;
      vm.promise = Revenue.getList(id, vm.query)
      .then(function(response) {
        vm.revenues = response.data;
      });
    }

    function showFilterBar() {
      vm.filter.show = true;
    }

    function hideFilterBar() {
      vm.filter.show = false;
    }

    function clearFilterBar() {
      vm.query.investor = '';
      if(vm.filter.form.$dirty) {
        vm.filter.form.$setPristine();
      }
    }

    function dialogExportExcel($event) {
      vm.export.type = 'excel';
      exportResume();
    }

    function dialogExportDoc($event) {
      vm.export.type = 'doc';
      exportResume();
    }

    // PRIVATE FUNCTIONS
    function getInvestors() {
      var id = $routeParams.associationId;
      Investor.getList(id)
      .then(function(response) {
          vm.investors = response.data;
      });
    }

    function getTotal() {
      var id = $routeParams.associationId;
      Revenue.getTotal(id, vm.query)
      .then(function(response) {
        vm.total = response.data[0];
      });
    }

    $scope.$watch('vm.query.investor', function (newValue, oldValue) {
      var bookmark = 1;
      if(!oldValue) {
        bookmark = vm.query.page;
      }
      if(newValue !== oldValue) {
        vm.query.page = 1;
      }
      if(!newValue) {
        vm.query.page = bookmark;
      }
      vm.getRevenue();
      getTotal();
    });

    function exportResume() {
      var id = $routeParams.associationId;
      var query = '?type=' + vm.export.type + '&investor=' + vm.query.investor + '&ordering=' + vm.query.ordering;
      location.href = "/entity/associations/"+id+"/revenue/export/" + query;
      $mdToast.showSimple('Exportando a .' + vm.export.type);
    }
}
