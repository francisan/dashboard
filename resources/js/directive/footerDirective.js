
fujiApp.directive('mainfooter', function() {
            var directive = {};
            directive.restrict = 'E';
            directive.templateUrl= 'footer.html';
            directive.controller = 'FooterController';
            return directive;
         });