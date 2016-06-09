(function(){
	'use strict';

	var controllerId = 'ReportController';

	angular .module('lokee') .controller(controllerId, ReportController);

		ReportController.$inject = ['$scope','$location'];

		function ReportController($scope){
			
    $scope.issuetitle;
    $scope.issuedescription;
    $scope.issuelocation;
    $scope.issuetype;
$scope.goToMain = function(){
		    	$location.path("/main");
	    	};
    $scope.addIssue = function(ttle,desc,loc,tpe) {
        console.log(ttle);
        console.log(desc);
        console.log(loc);
        
        //console.log($http.get('content.json'));
    
    
    // Angular $http() and then() both return promises themselves 
        $http({method:"GET", url:"app/ServiceOakville_Service_Requests.json"}).then(function(result){

            // What we return here is the data that will be accessible 
            // to us after the promise resolves
            console.log(result.data[0]);
            
            //result.data = result.data +
            var date = new Date();
            
            var dates = date.getFullYear() +"-" + date.getMonth()+1 + "-" + date.getDay() + " 0:00";
            
            console.log(dates);
            //AIzaSyCSGPxvYIkcbi7hwQKljvi6nhTHeZPpcco
            //AIzaSyCSGPxvYIkcbi7hwQKljvi6nhTHeZPpcco
            
            var address= loc;
            
            var THE_FID = result.data.length;
            var THE_CASE_ID = result.data[THE_FID-1].CASE_ID;
            var THE_TYPE = "Open";
            var THE_USER = "Alex";

/*
            var x = 324234;
            var y = 324234;
            
            var xaverage = 0;
            
            for(var i = 0; i < xcoordarray.length;i++){
                var xaverage = xaverage + xcoodarray[i];
            }xaverage = xaverage/xcoordarray.length;*/
            
            
            
            
            
            $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + 
            address + '&key=AIzaSyCSGPxvYIkcbi7hwQKljvi6nhTHeZPpcco')
            .then(function(_results){
               console.log(_results.data.results[0].formatted_address);
               //$scope.queryResults = _results.data.results;
               //$scope.geodata = $scope.queryResults[0].geometry
             }, 
             function error(_error){
                //$scope.queryError = _error;
             });
                        
          
            
            var newProblem = {
                FID: THE_FID,   //get the fid of the last object and then add one to this
                CASE_ID: THE_CASE_ID,  //get the fid of the last object and then add one to this
                POSTALCODE: 0,    //ask for address
                WARD: 0,    //ask for address
                SUBMIT_DAT: dates,  //automatically do it
                DETAILS: ttle,   //this is a form
                LOCATION: loc,   ///this is a form
                CASE_STATUS: 0,    //0 = not ocmpleted   1 = inprogress   2 = verification  3 = completed
                X_COORDINATE: 0,    // ask for address
                Y_COORDINATE: 0  ,  // ask for address
                DEPARTMENT: 0,   //?
                L_HOUSE_NO: 0,   //ask for address (this is basically street num)
                L_STREET_N: 0,   //ask for address
                FACILITY_N: 0,
                INTER_ST_1: 0,
                INTER_ST_2: 0,    
                SUBMIT_BY: 0,
                SOLVE_DATE: 0,
                STATUS: 0,
                PHOTO: 0,
                TYPE: tpe,
                DESC: desc,   //this is a form where users will put the description of the problem
                USER: THE_USER
            };
    $location.path("/main");
        console.log(newProblem);
        });
    };
    
	}
});