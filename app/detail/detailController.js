(function(){
	'use strict';

	var controllerId = 'DetailController';
 
	angular
		.module('lokee')
        .controller(controllerId, DetailController);
        
        DetailController.$inject = [
            '$scope',
            '$stateParams',
            'serviceFactory',
            '$location'
        ];
        
        function DetailController($scope, $stateParams, serviceFactory,$location){
                            
            serviceFactory.getProblems().query(function(data) {
                
                $scope.problem = data[$stateParams.id];                
            });
            $scope.goToMain = function(){
                $location.path("/main");
            };
           // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        }
 
})();