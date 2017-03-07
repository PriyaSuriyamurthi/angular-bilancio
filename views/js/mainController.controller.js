function mainController() {
	this.billHeader =['select','billType','description','itemAmount','date'];
}
angular
.module('bilancio')
.controller('MainController',mainController);