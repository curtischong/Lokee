{"changed":false,"filter":false,"title":"detailController.js","tooltip":"/app/detail/detailController.js","value":"(function(){\n\t'use strict';\n\n\tvar controllerId = 'DetailController';\n \n\tangular\n\t\t.module('lokee')\n        .controller(controllerId, DetailController);\n        \n        DetailController.$inject = [\n            '$scope',\n            '$stateParams',\n            'serviceFactory',\n            '$location'\n        ];\n        \n        function DetailController($scope, $stateParams, serviceFactory,$location){\n                            \n            serviceFactory.getProblems().query(function(data) {\n                \n                $scope.problem = data[$stateParams.id];                \n            });\n            $scope.goToMain = function(){\n                $location.path(\"/main\");\n            };\n           // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };\n        }\n \n})();","undoManager":{"mark":-1,"position":-1,"stack":[]},"ace":{"folds":[],"scrolltop":144,"scrollleft":0,"selection":{"start":{"row":22,"column":12},"end":{"row":24,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":9,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1463345317000}