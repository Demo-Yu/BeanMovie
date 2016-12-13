(function(angular){

	angular.module('moviecat.jsonp',[])
		.service('itcastJSONP',['$window',function($window){
			var doc = $window.document;

			this.jsonp = function(url,params,callback) {
				url += '?';

				for(var k in params) {
					url += k +'=' + params[k] + '&';
				}

				var cbName = 'itcast_jsonp_' + (new Data() - 0 );
				url += 'callback=' + cbName;

				var script = doc.createElement('script');
				script.src = url;
				doc.body.appendChild(script);

				$window[cbName] = function(data){
					cbName(data);
				}

			}
		}])

})(angular);