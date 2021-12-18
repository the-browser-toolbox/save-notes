const { watch, parallel } = require("gulp");

function build(cb){
    //scripts to build goes here




    console.log("build completed");
    cb();
}
function watching(cb){
    watch("src/scripts/*.js",function(rb){
        //The sccripts to go when watched



        console.log("watched");
        rb();
    });
    cb();
}

exports.default = parallel(build, watching);