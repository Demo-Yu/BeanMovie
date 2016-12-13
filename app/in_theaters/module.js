(function(angular){

	// 创建正在热映模块
	angular.module('moviecat.in_theaters',['ngRoute'])
		.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/in_theaters',{
				templateUrl:'./in_theaters/view.html',
				controller:'InTheatersCtrl'
			});
		}])
		.controller('InTheatersCtrl',['$scope','$http',function($scope,$http){
			// 使用本地JSON文件模拟数据的获取
			// 通过服务$http发送ajax请求
			$http({
				method:'GET',
				url:'./in_theaters/data.json'
			}).then(function(response){
				// 暴露数据
				$scope.movie = response.data;
			},function(response){

			})
		}]);

})(angular);