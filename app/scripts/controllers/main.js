'use strict';

/**
 * @ngdoc function
 * @name atelierAngularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the atelierAngularJsApp
 */
angular.module('atelierAngularJsApp')
  .controller('MainCtrl', ['$scope', '$http' , '$uibModal' , function ($scope, $http, $uibModal) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

//$scope.personne.prenom = "" ;
//console.log($scope.myform.prenom.$invalid);
  $scope.array = [
    {prenom: 'Dimi',
    nom : "Le",
    tel : "0102030405",
    mel : "dimitri@douarin.le",
    credit : "10"
    },
    {
      prenom: 'Bruno',
      nom: "Tetta",
      tel: "0102030405",
      mel: "bruno@tetta.fr",
      credit: "1000"
    }
  ];

      $scope.montantsCredit = [1000,2000,3000];

    $scope.personne={};


    $scope.personne =  {
      prenom:  "",
      nom: "",
      tel: "",
      mel: "",
      credit: ""
    };


  console.log($scope.personne.credit);

    $scope.valider = function(){
    console.log($scope.personne);
    $scope.array.push($scope.personne);
    $http({
      method: 'POST',
      url: '',
      data : $scope.personne
    }).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
      if (response.status = 404) {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: '../../404.html'
        });
      }
    });
  }

    $scope.validerGet = function(){
      console.log($scope.personne);
      $http({
        method: 'GET',
        url: ''
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response);
        if (response.status = 404) {
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '../../404.html'
          });
        }
      });
    }

    }]
  )


  .filter('reverse', function() {
    return function(input, uppercase) {
      input = input || '';
      var out = '';
      for (var i = 0; i < input.length; i++) {
        out = input.charAt(i) + out;
      }
      // conditional based on optional argument
      if (uppercase) {
        out = out.toUpperCase();
      }
      return out;
    }
  })

  .directive('myForm', function ()
  {
    return {
      restrict: 'E',
      templateUrl: 'views/formulaire.html'

    };

  });
