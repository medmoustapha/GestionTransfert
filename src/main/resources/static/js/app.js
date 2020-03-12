var app = angular.module('index', ['ngAnimate', 'ui.bootstrap', "ngRoute"])
    .constant('API_URL', 'http://localhost:8080/');
app.config(function ($routeProvider) {

    $routeProvider

        .when('/envoi', {
            templateUrl: "../pages/envoi/list.html"
        })
        .when('/paiment', {
            templateUrl: "../pages/paiment/list.html"
        })
        .when('/versement', {
            templateUrl: "../pages/versement/list.html"
        })
        .when('/remboursement', {
            templateUrl: "../pages/remboursement/list.html"
        })
        .when('/solde', {
            templateUrl: "../pages/solde/solde.html"
        })
        .when('/vendeur', {
            templateUrl: "../pages/vendeur/list.html"
        })
        .when('/service', {
            templateUrl: "../pages/service/list.html"
        })
    /*.otherwise({
        redirectTo: '/'
    })*/;
});
app.controller('indexController', function ($scope, $http, API_URL, $uibModal) {


});
app.controller('envoiController', function ($scope, $http, API_URL, $uibModal) {
    $scope.listVendeurs = [];
    $scope.data = [];
    $scope.satartAdd = null;
    $scope.montant=0;
    $scope.commission=0;
    $scope.forms = {vendeur1: {}, vendeur2: {}, montant: 0, destinateur: null, commission: 0, type: "envoi"};
    $scope.initialEnvoi = function () {
        console.log(API_URL);
        $http.get(API_URL + "vendeurs/getAll")
            .then(function (data) {
                $scope.listVendeurs = data.data;
            }).catch(function (data) {
        });
    };
    $scope.openEnvoi = function (size) {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './pages/envoi/add.html',
            size: 'sm',
            resolve: {
                data: function () {
                    return null;
                }
            }
        });

        modalInstance.result.then(function () {
            console.log('closed')
        });
    };
    $scope.getEnvoi = function () {
        $http.get(API_URL + 'operations/getOprations/envoi').then(function (value) {
            $scope.data = value.data;
            $scope.data.forEach(function(element){
                $scope.montant= $scope.montant+element.montant
            });
            $scope.data.forEach(function(element){
                $scope.commission= $scope.commission+element.commission
            });
        }).catch(function (reason) {
            console.log(reason)
        })
    };

    $scope.save = function () {
        var params = $scope.forms.valueOf();

        params.vendeur1 = JSON.parse(params.vendeur1);
        params.vendeur2 = JSON.parse(params.vendeur2);
        console.log(params);
        $http.post(API_URL + 'operations/addPost', params).then(function (value) {
            window.location.reload(true);
        }).catch(function (reason) {
            console.log(reason)
        })
        //$uibModalInstance.close();
    };

    $scope.cancel = function () {
        window.location.reload(true);
    };

});
app.controller('paimentController', function ($scope, $http, API_URL, $uibModal) {
    $scope.listVendeurs = [];
    $scope.data=[];
    $scope.montant=0;
    $scope.commission=0;
    $scope.forms = {vendeur1: {}, vendeur2: {}, montant: 0, destinateur: null, commission: 0, type: "paiment"};
    $scope.initial = function () {
        console.log(API_URL);
        $http.get(API_URL + "vendeurs/getAll")
            .then(function (data) {
                $scope.listVendeurs = data.data;
            }).catch(function (data) {
        });
    };
    $scope.openPaiment = function (size) {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './pages/paiment/add.html',
            size: 'sm',
            resolve: {
                data: function () {
                    return null;
                }
            }
        });

        modalInstance.result.then(function () {
            console.log('closed')
        });
    };

    $scope.getPaiment = function () {
        $http.get(API_URL + 'operations/getOprations/paiment').then(function (value) {
            $scope.data = value.data;
            $scope.data.forEach(function(element){
                $scope.montant= $scope.montant+element.montant
            });
            $scope.data.forEach(function(element){
                $scope.commission= $scope.commission+element.commission
            });
        }).catch(function (reason) {
            console.log(reason)
        })
    };

    $scope.save = function () {
        var params = $scope.forms.valueOf();
        params.vendeur1 = JSON.parse(params.vendeur1);
        params.vendeur2 = JSON.parse(params.vendeur2);

        $http.post(API_URL + 'operations/addPost', params).then(function (value) {
            window.location.reload(true);
        }).catch(function (reason) {
            console.log(reason)
        })
        //$uibModalInstance.close();
    };


    $scope.cancel = function () {
        window.location.reload(true);
    };

});
app.controller('versementController', function ($scope, $http, API_URL, $uibModal) {
    $scope.listVendeurs = [];
    $scope.listService=[];
    $scope.data=[];
    $scope.montant=0;
    $scope.commission=0;
    $scope.forms = {service: {}, vendeur: {}, montant: 0};
    $scope.initialForm= function(){
        $scope.forms = {service: {}, vendeur: {}, montant: 0};
    };
    $scope.initial = function () {
        $http.get(API_URL + "vendeurs/getAll")
            .then(function (data) {
                $scope.listVendeurs = data.data;
            }).catch(function (data) {
        });
        $http.get(API_URL + "services/getAll")
            .then(function (data) {
                $scope.listService = data.data;
            }).catch(function (data) {
        });
    };

    $scope.getVersement = function () {
        $http.get(API_URL + 'versement/getAll').then(function (value) {
            $scope.data = value.data;
            $scope.data.forEach(function(element){
                $scope.montant= $scope.montant+element.montant
            });
        }).catch(function (reason) {
            console.log(reason)
        })
    };
    $scope.sumMontant= function(){
        var sum=0;
        $scope.data.forEach(function(element){
            sum= sum+element.montant
        });
        console.log(sum);
        return sum;
    };

    $scope.addVersement = function (size) {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './pages/versement/add.html',
            size: 'sm',
            resolve: {
                data: function () {

                }
            }
        });

        modalInstance.result.then(function () {
            console.log('closed')
        });
    };

    $scope.save = function () {
        var params = $scope.forms.valueOf();
        params.service = JSON.parse(params.service);
        params.vendeur = JSON.parse(params.vendeur);

        $http.post(API_URL + 'versement/addPost', params).then(function (value) {
            window.location.reload(true);
        }).catch(function (reason) {
            console.log(reason)
        })
        //$uibModalInstance.close();
    };


    $scope.cancel = function () {
        window.location.reload(true);
    };

});
app.controller('remboursementController', function ($scope, $http, API_URL, $uibModal) {
    $scope.listVendeurs = [];
    $scope.listService=[];
    $scope.data=[];
    $scope.montant=0;
    $scope.commission=0;
    $scope.forms = {service: {}, vendeur: {}, destinateur:'',montant: 0, commission:0};
    $scope.initialForm= function(){
        $scope.forms = {service: {}, vendeur: {}, destinateur:'',montant: 0, commission:0};
    };
    $scope.initial = function () {
        $http.get(API_URL + "vendeurs/getAll")
            .then(function (data) {
                $scope.listVendeurs = data.data;
            }).catch(function (data) {
        });
        $http.get(API_URL + "services/getAll")
            .then(function (data) {
                $scope.listService = data.data;
            }).catch(function (data) {
        });
    };

    $scope.getRemboursement = function () {
        $http.get(API_URL + 'remboursement/getAll').then(function (value) {
            $scope.data = value.data;
            $scope.data.forEach(function(element){
                $scope.montant= $scope.montant+element.montant
            });
            $scope.data.forEach(function(element){
                $scope.commission= $scope.commission+element.commission
            });
        }).catch(function (reason) {
            console.log(reason)
        })
    };

    $scope.addRemboursement = function (size) {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './pages/remboursement/add.html',
            size: 'sm',
            resolve: {
                data: function () {

                }
            }
        });

        modalInstance.result.then(function () {
            console.log('closed')
        });
    };

    $scope.save = function () {
        var params = $scope.forms.valueOf();
        params.service = JSON.parse(params.service);
        params.vendeur = JSON.parse(params.vendeur);
        $http.post(API_URL + 'remboursement/addPost', params).then(function (value) {
            window.location.reload(true);
        }).catch(function (reason) {
            console.log(reason)
        })
        //$uibModalInstance.close();
    };


    $scope.cancel = function () {
        window.location.reload(true);
    };

})
app.controller('soldeController', function ($scope, $http, API_URL, $rootScope) {
    $scope.envoi=0;
    $scope.paiment=0;
    $scope.remboursement=0;
    $scope.versement =0;
    $scope.init= function(){
        $http.get(API_URL + 'operations/getOprations/envoi').then(function (value) {

            value.data.forEach(function(element){
                $scope.envoi= $scope.envoi+element.montant
            });
            /*$scope.data.forEach(function(element){
                $scope.commission= $scope.commission+element.commission
            });*/
        }).catch(function (reason) {
            console.log(reason)
        });
        $http.get(API_URL + 'versement/getAll').then(function (value) {
            value.data.forEach(function(element){
                $scope.versement= $scope.versement+element.montant
            });
        }).catch(function (reason) {
            console.log(reason)
        })
        $http.get(API_URL + 'operations/getOprations/paiment').then(function (value) {
            value.data.forEach(function(element){
                $scope.paiment= $scope.paiment+element.montant
            });
            console.log($scope.envoi);
        }).catch(function (reason) {
            console.log(reason)
        })
        $http.get(API_URL + 'remboursement/getAll').then(function (value) {
            value.data.forEach(function(element){
                $scope.remboursement= $scope.remboursement+element.montant
            });
        }).catch(function (reason) {
            console.log(reason)
        })
    };
});
app.controller('vendeurController', function ($scope, $http, API_URL, $uibModal) {
    $scope.data=[];

    $scope.forms = {id:null,nomPrenom: null, tel: null, address:'',ville: null};

    $scope.initialForm= function(){
        $scope.forms = {id:null,nomPrenom: null, tel: null, address:'',ville: null};
    };
    $scope.initial = function () {
            console.log($scope.forms);
            //$scope.initialForm();
    };

    $scope.getVendeur = function () {
        $http.get(API_URL + 'vendeurs/getAll').then(function (value) {
            $scope.data = value.data;

        }).catch(function (reason) {
            console.log(reason)
        })
    };

    $scope.addVendeur = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './pages/vendeur/add.html',
            size: 'sm',
            resolve: {
                data: function () {

                }
            },
            controller: function ($scope, $uibModalInstance) {
                $scope.ok = function () {
                    $uibModalInstance.close();
                };

                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        });

        modalInstance.result.then(function () {
            console.log('closed')
        });

    };

    $scope.editer=function(data){
        $scope.forms= data;
        this.addVendeur();
    };

    $scope.save = function () {
        var params = $scope.forms.valueOf();
        $http.post(API_URL + 'vendeurs/addPost', params).then(function (value) {
          window.location.reload(true);
            //$scope.ok();
        }).catch(function (reason) {
            console.log(reason)
        })
        //$uibModalInstance.close();
    };
    $scope.confirmDelete = function(id) {
        var isConfirmDelete = confirm('Voulez-vous supprimer?');
        if (isConfirmDelete) {
            $http({
                method: 'DELETE',
                url: API_URL + 'vendeurs/' + id
            }).
            then(function(data) {
                alert('vendeur supprimer avec success');
                location.reload();
            }).catch(function(data) {
                alert('Unable to delete');
            });
        } else {
            return false;
        }
    }


});
app.controller('serviceController', function ($scope, $http, API_URL, $uibModal) {
    $scope.data=[];

    $scope.forms = {id:null,libelle: null, };

    $scope.initialForm= function(){
        $scope.forms = {id:null,libelle: null};
    };
    $scope.initial = function () {
        //  $scope.initialForm();
    };

    $scope.getService = function () {
        $http.get(API_URL + 'services/getAll').then(function (value) {
            $scope.data = value.data;

        }).catch(function (reason) {
            console.log(reason)
        })
    };

    $scope.addService= function () {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: './pages/service/add.html',
            size: 'sm',
            data: $scope.forms,
            resolve: {
                data: function () {
              return $scope.forms
                }
            }
        });
        $scope.forms=modalInstance.data;

        modalInstance.result.then(function () {
            console.log('closed')
        });
    };

    $scope.editer=function(data){
        $scope.forms= data;
        console.log($scope.forms);
        this.addService();
    };

    $scope.save = function () {
        var params = $scope.forms.valueOf();
        console.log(params)
        $http.post(API_URL + 'services/addPost', params).then(function (value) {
            window.location.reload(true);
        }).catch(function (reason) {
            console.log(reason)
        })
        //$uibModalInstance.close();
    };


    $scope.cancel = function () {
        window.location.reload(true);
    };
    $scope.confirmDelete = function(id) {
        var isConfirmDelete = confirm('Voulez-vous supprimer?');
        if (isConfirmDelete) {
            $http({
                method: 'DELETE',
                url: API_URL + 'services/' + id
            }).
            then(function(data) {
                alert('service supprimer avec success');
                location.reload();
            }).catch(function(data) {
                alert('Unable to delete');
            });
        } else {
            return false;
        }
    }

});
