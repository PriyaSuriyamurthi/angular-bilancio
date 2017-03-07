function BillController(BillService) {
	var ctrl = this;
	ctrl.billList = [];
	this.fetchBills = function() {
		BillService
		.retrieve()
		.then(function(response) {
			ctrl.billList = response;
		})
	}
	this.getRandomColor = function(item){
		var colors = ['#DF3D82','#C1E1A6','#404040',
					  '#4A96AD','#1cb39e', '#df5350', 
					  '#448fd0', '#212323', '#C63D0F',
					  '#E9E581','#7D1935'];
		var color = "";
		if(item.color) {
			return item.color;
		}
	     
	           color += colors[Math.floor(Math.random() * colors.length)];
	           item.color = color;
	           return color;	             
    }
	this.fetchBills();
}
angular
.module('bilancio')
.controller('BillController',BillController);