function billDetails() {
	
	return {
		restrict: 'E',
        controller:'BillController as bill',
		template: `
                    <div class="bill">
                    <h1 class="page-header">Bill for the month</h1>
                    <div class="row placeholders ">
                        <div class="col-xs-5 col-sm-2 placeholder placeholder1-color">
                            <h4>Label</h4>
                            <span class="text-muted">Something else</span>
                        </div>
                        <div class="col-xs-5 col-sm-2 placeholder placeholder2-color">
                            <h4>Label</h4>
                            <span class="text-muted">Something else</span>
                        </div>
                        <div class="col-xs-5 col-sm-2 placeholder placeholder3-color">
                            <h4>Label</h4>
                            <span class="text-muted">Something else</span>
                        </div>
                        <div class="col-xs-5 col-sm-2 placeholder placeholder4-color">
                            <h4>Label</h4>
                            <span class="text-muted">Something else</span>
                        </div>
                    </div>
                    <h2 class="sub-header">Bill Details</h2>
                    <div class="table-responsive">
                        <table class="table table-striped" >
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>BillType</th>
                                    <th>Description</th>
                                    <th>Item-Amount</th>
                                    <th>Date</th>
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