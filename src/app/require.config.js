// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    //urlArgs: "bust=" +  (new Date()).getTime(),
    paths: {
        "ko-punches-additions": "app/main",
        "knockout":             "bower_modules/knockout/dist/knockout",
        "knockout-punches":     "bower_modules/knockout.punches/knockout.punches.min",
        "numeral":              "bower_modules/numeral/numeral"
    },
    shim: {

    }
};


