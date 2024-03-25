// Code your solution in this file!
function receivesAFunction(callback) {
    callback() ;
}

function returnsANamedFunction() {
    function namedFunction() {

    }
    return namedFunction ;
}

function returnsAnAnonymousFunction() {
    return function() {

    }
}