
fujiApp.directive('mainheader', function() {

            var directive = {};
            directive.restrict = 'E';
            //directive.template = ' <a class="viewReport" ng-click="showPopUpByName(name)">Zoom</a>   <a href="#!reports/{{reportid}}" data-target="#reports" class="zoom">Reports</a>     <div id="{{name}}"></div>';
            
            directive.templateUrl= 'header.html',
            directive.controller = 'HeaderController';			
			
            
             directive.scope = {
               selected : '@'
            }             
            return directive;
         });