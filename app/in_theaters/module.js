(function(angular){

	// 创建正在热映模块
	angular.module('moviecat.in_theaters',['ngRoute'])
		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/in_theaters',{
				templateUrl:'./in_theaters/view.html',
				controller:'InTheatersCtrl'
			});
		}])
		.controller('InTheatersCtrl',['$scope',function($scope){
			
		}]);

})(angular);