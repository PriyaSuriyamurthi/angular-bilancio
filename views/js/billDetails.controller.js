function BillController(BillService,$stateParams,$scope,$state) {
	var ctrl = this;
	ctrl.shellID = $stateParams.shellID;
	ctrl.billList = [];
	ctrl.filteredList = [];
	ctrl.currentPage = 1;
	ctrl.numPerPage = 10;
	ctrl.maxsize = ctrl.billList.length/10;
	console.log(ctrl.shellID);
	ctrl.getRandomColor = function(item,index) {
		var colors = ['#3175b0','#58b358','#52bcdc',
					  '#efa741','#d24844'];
		var color = "";
		if(item.color) {
			return item.color;
		}
	     
	           color += colors[index%colors.length];
	           item.color = color;
	           return color;	             
   	 	}
   	$scope.toggleModal = function(btnClicked){
        $scope.buttonClicked = btnClicked;
        $scope.showModal = !$scope.showModal;
    }
  
	ctrl.fetchBills = function() {
		ctrl.billList.length=0;
		BillService
		.retrieve(this.shellID)
		.then(function(response) {
			ctrl.billList = response;
			$scope.$watch('currentPage + numPerPage',function(){
				 var begin = ((ctrl.currentPage - 1) * ctrl.numPerPage)
		    		,end = begin + ctrl.numPerPage;
		    	ctrl.filteredList = ctrl.billList.slice(begin,end);
			})
		})
	}
	
	
	ctrl.fetchBills();
}
angular
.module('bilancio')
.controller('BillController',BillController);