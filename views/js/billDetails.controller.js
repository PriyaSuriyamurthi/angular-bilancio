function BillController(BillService) {
	var ctrl = this;
	ctrl.billList = [];
	function fetchBills() {
		BillService
		.retrieve()
		.then(function(response) {
			ctrl.billList = response;
		})
	}
	fetchBills();
}
angular
.module('bilancio')
.controller('BillController',BillController);