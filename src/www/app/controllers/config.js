angular
  .module('personalLoans')
  .controller('ConfigCtrl', ConfigCtrl);

ConfigCtrl.$inject = ['Association' , '$scope', '$routeParams', '$mdToast', '$mdDialog'];

function ConfigCtrl(Association, $scope, $routeParams, $mdToast, $mdDialog) {
    var vm = this;

    $scope.params = $routeParams;
    $scope.master.toolbar = {title: 'Configuración', icon: 'content/img/business/justice.svg'}
    vm.name;
    vm.description;
    vm.edit_loading = false;
    vm.association = {};
    vm.showDialogEdit = showDialogEdit
    vm.clearDialogEdit = clearDialogEdit;
    vm.hideDialogCreate = hideDialogCreate;
    vm.editAssociation = editAssociation;

    // INIT
    getAssociationItem();
    $scope.master.updateSideNav();

    // PUBLIC FUNCTIONS
    function showDialogEdit($event) {
      vm.name = vm.association.name;
      vm.description = vm.association.description;
      $mdDialog.show({
        targetEvent: $event,
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: true,
        fullscreen: true,
        templateUrl: 'app/entity/templates/_edit_association.html',
      });
    }

    function clearDialogEdit() {
      vm.name = '';
      vm.description = '';
    }

    function hideDialogCreate() {
      $mdDialog.hide();
    }

    function editAssociation() {
      if ($scope.associationForm.$valid) {
        vm.edit_loading = true;
        var id = $scope.params.associationId;
        var data = {name: vm.name, description: vm.description};
        Association.update(id, data)
        .then(function(response) {
          vm.edit_loading = false;
          vm.association = response.data;
          hideDialogCreate();
          showToastEdit();
        }).catch(function(response) {
          vm.edit_loading = false;
          $mdToast.showSimple('Error al crear asociación!');
        });
      }
    }

    // PRIVATE FUNCTIONS
    function getAssociationItem() {
      var id = $scope.params.associationId;
      Association.get(id)
      .then(function(response) {
        vm.association = response.data;
      })
      .catch(function(error) {
        $mdToast.showSimple('Error al buscar asociación!');
      })
    }

    function showToastEdit($event) {
      $mdToast.showSimple('Asociación editada exitosamente!');
    };
}
