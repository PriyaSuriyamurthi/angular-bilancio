function BillService($http) {
	var API="http://lowcost-env.tbm3pbiki7.us-east-1.elasticbeanstalk.com/api/billshell/";
	var retrieve = function(shellID) {
		return $http.get(API + shellID + '/bills').then(function(response) {
				return response.data;
		});
	}
	return {
		retrieve: retrieve
	}
};
angular
.module('bilancio')
.service("BillService",BillService);