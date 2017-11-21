
require('es6-promise');

'use strict';


// First, create a promise using the Promise constructor as we have been doing.

let promise = new Promise(function(fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

onRejected = error => {
    console.log(error.message);
}

promise.then(console.log, onRejected);
