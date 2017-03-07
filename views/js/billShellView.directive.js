function billShellView() {
	return {
	restrict:'E',
	scope:{},
	controller:'BillShellController as billshell',
	template:` <div class="billshell">
                    <div class="row placeholders" >
                        <div class="col-xs-5 col-sm-2 placeholder" 
                        ng-repeat="shell in billshell.billShell" 
                        ng-style="{background:billshell.getRandomColor(shell)}"
                        ng-click="billshell">
                            <h4>{{shell.sheetName | lowercase}}</h4>
                            <span class="text-muted"> {{shell.creationDate| date:YYMMD}}</span>
                        </div>
                        <div class="col-xs-5 col-sm-2 placeholder placeholderAdd"                             
                            ng-click="shell.inputShow = true"
                            ng-dblclick="shell.inputShow = false" 
                            >
                            <h4 > Add New Shell </h4>
                            <span class="text-muted" ng-hide="shell.inputShow"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></span>               
                            <form name="shellCreate"
                            ng-submit="billshell.shellCreate()">
                            <input type="text" 
                            ng-model="billshell.shellNew"
                            ng-show="shell.inputShow" 
                            placeholder="Enter Shell Name"/>
                            <input type="submit" 
                            style="position: absolute; 
                            left: -9999px; width: 1px; 
                            height: 1px;"
                            tabindex="-1" /> 
                            </form>
                        </div>
                    </div>
                    </div>`
                }
}
angular
.module('bilancio')
.directive('billshellView',billShellView);