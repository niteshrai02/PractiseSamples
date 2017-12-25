app.filter('oddeven', function () {
    return function (input) {
        var result = "odd";
        if (input % 2 == 0) {
            result = "even";
        }
        return result;
    };
});