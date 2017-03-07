function billShellView(BillShellService,$scope) {
	var ctrl = this;
	ctrl.billShell = [];
	this.getBillShell = function() {
		BillShellService.retrieve().then(function(response) {
				ctrl.billShell = response;
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
    this.shellCreate = function() {
    	console.log('hi');
    	var createDetails = {"login_id": "58b4bb8b428f652285bb62b4",
    						"owner": "priya.suriyamurthi@gmail.com"}
    	createDetails.sheetName = this.shellNew;
    	BillShellService.create(createDetails).then(function(response){
    		console.log('created',response);
    		ctrl.billShell.push(response);
       	})
    }
    this.getBillShell();
}
angular
.module('bilancio')
.controller('BillShellController',billShellView);