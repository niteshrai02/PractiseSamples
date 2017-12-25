
/// <reference path="../Module/Module.js" />
// This is the service that has been created using factory method
app.factory("HomeFactory", function () {
    var factory = {};

    factory.Multiply = function (input1, input2) {
        return input1 * input2;
    };
    return factory;
});

//This is the service that has been created using service method
app.service("HomeService", function () {
    //var factory = {};

    this.Sum = function (input1, input2) {
        var sum = input1 + input2;
        return sum;
    };
    //return factory;
});

//This is the service that has been created using provider method
app.config(function ($provide) {
    $provide.provider('globalSetting', function () {
        this.$get = function () {
            var appName = "Angular Js Sample World";
            return {
                appname: appName
            };
        }

    });

});
