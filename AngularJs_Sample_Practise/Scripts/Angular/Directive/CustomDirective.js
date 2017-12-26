/// <reference path="../Lib/angular.min.js" />
app.directive('hello', function () {
    var directive = {};
    directive.restrict = 'E';
    directive.template = '<label>{{friend.Name}}  {{friend.Address}}</label><div ng-transclude></div>';
    directive.scope = { friend: '=' };
    directive.transclude = true;

    return directive;
});