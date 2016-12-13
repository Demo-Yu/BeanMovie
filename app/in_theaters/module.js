;(function(angular){

	// 创建正在热映模块
	angular.module('moviecat.in_theaters',['ngRoute'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/in_theaters/:page?',{
			templateUrl:'./in_theaters/view.html',
			controller:'InTheatersCtrl'
		});
	}])
	.controller('InTheatersCtrl',['$scope','$http','$routeParams','$route','itcastJSONP',function($scope,$http,$routeParams,$route,itcastJSONP){
		// 实现分页功能
		// 一页展示多少条数据
		$scope.pageSize = 5;
		// 表示当前是第几页
		$scope.curPage = $routeParams.page || 1;

		// 计算每一页的起始值
		var movieStart = ($scope.curPage - 1) * $scope.pageSize;

		// 通过JSONP获取豆瓣的数据
		itcastJSONP.jsonp('https://api.douban.com/v2/movie/in_theaters',{start:movieStart, count:$scope.pageSize},function(data){
			$scope.movie = data;
			// 计算总页数
			$scope.totalPages = Math.ceil( data.total / $scope.pageSize );
			$scope.$apply();
		});

		// 实现上一页和下一页翻页的功能
		$scope.goPages = function(current) {
			if(current <= 0 || current > $scope.totalPages) {
				return;
			}

			// 调用updateParams方法，更新路由中配置好的路由参数
			$route.updateParams({page:current});
		};

	}])

})(angular);