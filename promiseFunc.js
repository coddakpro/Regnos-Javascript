var func = function (resolve, reject) {
    console.log(10);
};
var promise = new Promise(func);
promise.then(function (value) {
    console.log(value);
}, function (reason) {
    console.log(reason);
});