/// <reference path="../Lib/angular.min.js" />
app.directive('hello', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.template = 'My First Directive';
    directive.transclude = true;

    return directive;
});