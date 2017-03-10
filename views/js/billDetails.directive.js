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
                        <div class="col-xs-5 col-sm-2 placeholder" ng-style="{background:bill.getRandomColor(bill,$index)}">
                            <h4>Label</h4>
                            <span >Something else</span>
                        </div>
                    </div>
                    <h2 class="sub-header">Bill Details</h2>
                    <p class="billMessage" ng-show="bill.billList.length < 1" >No Bills for the Bill Shell</p>
                    <button class="btn btn-primary" 
                    ng-click="toggleModal('New Bill')">New Bill</button>
                    <div  class="table-responsive table-details">
                        <table  ng-show="bill.billList.length > 0" class="table table-striped" >
                            <thead>
                                <tr >
                                    <th ng-repeat="header in bill.data">{{header | uppercase}}</th>                                    
                                </tr>                                
                            </thead>
                            <tbody >
                                <tr ng-repeat="bills in bill.filteredList">
                                    <td>{{bills.billType}}</td>
                                    <td>{{bills.description}}</td>
                                    <td>{{bills.itemAmount | currency:"$ "}}</td>
                                    <td>{{bills.date | date: 'MMM d, y'}}</td>
                                    <td><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-pencil">
                                        </i></button>
                                         <button type="button" class="btn btn-danger"><i class="glyphicon glyphicon-trash">
                                         </i></button>
                                    </td>
                                </tr> 
                            </tbody>
                        </table>
                        <ul uib-pagination 
                      ng-model="bill.currentPage"
                      total-items="bill.billList.length"
                      max-size="bill.maxSize"  
                      boundary-links="true">
                    </ul>
                    </div>
                     <modal visible="showModal">
                         <p>Add New Bill</p>
                         <form name="billCreate">
                            <label for="billType">Bill Type</label>
                            <select ng-model="billType" required>
                            <option>Select</option>
                            <option>Rent/Mortgage</option>
                            <option>kids Expense</option>
                            <option>Grocery</option>
                            <option>Utilities</option>
                            <option>Credit Cards</option>
                            <option>Trip/Tour</option>
                            <option>Miscellaneous</option>
                            <option>Others</option>
                            </select>
                            <br>
                            <label for="description">Description</label>
                            <textarea id="description" ng-model="description" required placeholder="Description"></textarea>
                            <br>
                            <label for="itemAmount">Item Amount</label>
                            <input id="itemAmount" ng-model="itemAmount" required placeholder="Amount"></textarea>
                            <br>
                            <label for="comments">Comments</label>
                            <input id="comments" ng-model="comments"  placeholder="Comments"></textarea>
                         </form>

                         <br>
                         <button type="button" class="btn btn-primary" class="close" data-dismiss="modal">Create</button>
                         <button type="button" class="btn btn-default " class="close" data-dismiss="modal">Cancel</button>
                      </modal>
                    </div>
                `
	}
}
angular
.module('bilancio')
.directive('billDetails',billDetails);