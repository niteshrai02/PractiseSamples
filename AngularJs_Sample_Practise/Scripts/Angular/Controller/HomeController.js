/// <reference path="../Service/HomeService.js" />
/// <reference path="../Lib/angular.min.js" />

app.controller("HomeController", function ($scope, HomeService, HomeFactory, globalSetting, $filter, constant) {
    $scope.input1 = 0;
    $scope.input2 = 0;
    $scope.resultValue = "";

    $scope.GetSum = function (val1, val2) {
        $scope.result = HomeService.Sum(val1, val2);
        $scope.resultValue = $filter('oddeven')($scope.result);
    }
    $scope.Multiply = function (val1, val2) {
        $scope.result = HomeFactory.Multiply(val1, val2);
        $scope.resultValue = $filter('oddeven')($scope.result);
    }

    $scope.friends = [{ Name: 'Nitss', Address: 'abc' }, {Name: 'Alok', Address: 'xyz' }];

    $scope.AppName = globalSetting.appname;
    $scope.constantName = constant.applicationName;

});

//Scope less controller
app.controller("ScopeLessController", function () {
    this.scopeless = "Hello Scope Less";

    this.HelloScopeless = function () {
        this.scopeless = "Method of Scope Less";
    }
});