function BillService($http) {
	var API="http://lowcost-env.tbm3pbiki7.us-east-1.elasticbeanstalk.com/api/billshell/58b4fb5abec7ea23205b65b8/bills";
	var retrieve = function() {
		return $http.get(API).then(function(response) {
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