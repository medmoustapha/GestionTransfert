app.controller('versementController', function ($scope, $http, API_URL, $uibModal) {
    $scope.listVendeurs = [];
    $scope.listService=[];
    $scope.data=[];
    $scope.forms = {service: {}, vendeur: {}, montant: 0};
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
        console.log('initVersement');
        $http.get(API_URL + 'versement/getAll').then(function (value) {
            $scope.data = value.data;
        }).catch(function (reason) {
            console.log(reason)
        })
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
                    return null;
                }
            }
        });

        modalInstance.result.then(function () {
            console.log('closed')
        });
    };

    $scope.save = function () {
        console.log($scope.forms.valueOf());
        var params = $scope.forms.valueOf();
        params.service = JSON.parse(params.service);
        params.vendeur = JSON.parse(params.vendeur);

        $http.post(API_URL + 'versement/addPost', params).then(function (value) {
            console.log(value);
        }).catch(function (reason) {
            console.log(reason)
        })
        //$uibModalInstance.close();
    };


    $scope.cancel = function () {

        alert("You clicked the cancel button.");
        $uibModalInstance.dismiss('cancel');
    };

});