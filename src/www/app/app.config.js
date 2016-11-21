'use strict';

angular
  .module('personalLoans')
  .config(materialTheming)
  .config(materialDatepicker);


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
