var app = angular.module('appNote', []);

app.controller('noteCtrl', ["$scope", function($scope) {
    $scope.elem = 1;
    $scope.total = 300;
    $scope.numPanier=0;
      $scope.prixPanier = 0;
    $scope.products = [{
        name: 'Web Development',
        price: 300,
        active: true,
        onoff : true,
    }, {
        name: 'Design',
        price: 400,
        active: false,
        onoff : false,

    }, {
        name: 'Integration',
        price: 250,
        active: false,
        onoff : false,

    }, {
        name: 'Formation',
        price: 220,
        active: false,
        onoff : false,

    }];


    $scope.addPrice = function() {
        if (this.product.active == false) {
            $scope.total += this.product.price;
            this.product.active = true;
            $scope.elem += 1;
            this.product.onoff = true;
        }
        else if (this.product.active == true) {
            $scope.total -= this.product.price;
            this.product.active = false;
            $scope.elem -= 1;
            this.product.onoff = false;
        }
    }

    $scope.addPanier = function(){
  $scope.numPanier += $scope.elem;
  $scope.prixPanier += $scope.total;
  $scope.elem = 1;
  $scope.total = 300;
  $scope.products = [{
      name: 'Web Development',
      price: 300,
      active: true,
      onoff : true,
  }, {
      name: 'Design',
      price: 400,
      active: false,
      onoff : false,

  }, {
      name: 'Integration',
      price: 250,
      active: false,
      onoff : false,

  }, {
      name: 'Formation',
      price: 220,
      active: false,
      onoff : false,

  }];
    }


}]);
