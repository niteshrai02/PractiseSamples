/// <reference path="../Service/HomeService.js" />
/// <reference path="../Lib/angular.min.js" />

app.controller("HomeController", function ($scope, HomeService, HomeFactory, globalSetting) {
    $scope.input1 = 0;
    $scope.input2 = 0;

    $scope.GetSum = function (val1, val2) {
        $scope.result = HomeService.Sum(val1, val2);
    }
    $scope.Multiply = function (val1, val2) {
        $scope.result = HomeFactory.Multiply(val1, val2);
    }
    $scope.AppName = globalSetting.appname;

});