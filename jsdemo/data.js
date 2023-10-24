System.register([], function (exports_1, context_1) {
    "use strict";
    var arr;
    var __moduleName = context_1 && context_1.id;
    function helloWorld() {
        console.log("Hello, world!");
    }
    exports_1("default", helloWorld);
    return {
        setters: [],
        execute: function () {
            arr = new Array(1, 2, 4, 5, 3, 7, 9, 8, 9);
        }
    };
});
