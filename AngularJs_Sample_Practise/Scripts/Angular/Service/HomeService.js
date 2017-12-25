
/// <reference path="../Module/Module.js" />
app.factory("HomeFactory", function () {
    var factory = {};

    factory.Sum = function (input1, input2) {
        return input1 + input2;
    };
    return factory;
});
