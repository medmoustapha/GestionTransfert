var app=angular.module('compteApp',[]);
app.controller('compteController', function($scope, $http){
	$scope.compte=null;
	$scope.codeCompte=null;
	$scope.operation={type:"versement",montant:0,cpt2:null};
	$scope.pageOperations=null;
	$scope.pageCourant=0;
	$scope.pageSize=5;
	$scope.pages=[];
	$scope.errorMessage=null;
	$scope.errorCompte=null
	$scope.chargerCompte=function(){
		$scope.compte=null;
		$scope.errorCompte=null
		 $scope.pageCourant=0;
		$http.get("http://localhost:8090/comptes/"+$scope.codeCompte)
		     .then(function(data){
		    	 
		    	 $scope.chargerOprations();
		    
		    	 $scope.compte=data.data;
		    	 console.log($scope.compte);
		     }).catch(function(data){
				   
		    	 $scope.errorCompte=data.data.message;
				  
			     });
	};	
   $scope.chargerOprations=function(){
	   $scope.errorMessage=null;
		$http.get("http://localhost:8090/operations?codeCompte="+$scope.codeCompte+"&page="+$scope.pageCourant+"&size="+$scope.pageSize)
	     .then(function(data){
	    	 $scope.pageOperations=data.data;
	    	 $scope.pages=new Array(data.data.totalPage);
	    	 console.log(data);
	     });
   };
   $scope.goToPage=function(p){
	   $scope.pageCourant=p;
	   $scope.chargerOprations();
	   
   }
   $scope.saveOperation=function(){
	   $scope.errorMessage=null;
	   var params="";
	   if($scope.operation.type=='virement'){
		   params="cpt1="+$scope.codeCompte+"&cpt2="+$scope.operation.cpt2+"&montant="+$scope.operation.montant+"&codeEmp=1";
	   }
	   else{
		   params="code="+$scope.codeCompte+"&montant="+$scope.operation.montant+"&codeEmp=1";
	   }
	   
	   $http({
           method: 'PUT',
           url: "http://localhost:8090/"+$scope.operation.type,
           data:params,
           headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	   })
	     .then(function(data){
	    	$scope.chargerCompte();
	    	
	     })
	   .catch(function(data){
		   console.log(data)
		   $scope.errorMessage=data.data.message;
	     });
   }
});