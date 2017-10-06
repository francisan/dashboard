
fujiApp.directive('amchart', function() {

            var directive = {};
            directive.restrict = 'E';
            //directive.template = ' <a class="viewReport" ng-click="showPopUpByName(name)">Zoom</a>   <a href="#!reports/{{reportid}}" data-target="#reports" class="zoom">Reports</a>     <div id="{{name}}"> </div>';
            directive.template = '<div id="amchartTitle{{reportid}}" class="amchartTitle"></div></div><div id="{{name}}"> </div>';
            directive.controller = 'DashboardController';			
			
            
             directive.scope = {
               name : '@',
               reportid : '@'
            }             
            return directive;
         });