require('es6-promise');

'use strict';

function output(textToOutput) {
    console.log(textToOutput);
}

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
        fulfill('FULFILLED!');
    }, 300);
});

promise.then(output); 