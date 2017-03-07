function billDetails() {
	
	return {
		restrict: 'E',
        scope:{},
        bindToController: {
        data:'='
        },
        controller:'BillController as bill',
		template: `
                    <div class="bill">
                    <div class="row placeholders ">

                        <div class="col-xs-5 col-sm-2 placeholder" ng-style="{background:bill.getRandomColor(bill)}">
                            <h4>Label</h4>
                            <span class="text-muted">Something else</span>
                        </div>
                    </div>
                    <h2 class="sub-header">Bill Details</h2>
                    <div class="table-responsive">
                        <table class="table table-striped" >
                            <thead >
                                <tr >
                                    <th ng-repeat="header in bill.data">{{header | uppercase}}</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr ng-repeat="bills in bill.billList">
                                    <td><input type="checkbox"/></td>
                                    <td>{{bills.billType}}</td>
                                    <td>{{bills.description}}</td>
                                    <td>{{bills.itemAmount | currency:"$ "}}</td>
                                    <td>{{bills.date | date: 'MMM d, y'}}</td>
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                    </div>
                `
	}
}
angular
.module('bilancio')
.directive('billDetails',billDetails);