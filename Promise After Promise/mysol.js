// Call the first function in your program. first() will return a promise that
// will be fulfilled with a secret value.

// Call the second with the fulfilled value of first. Return the promise returned
// by second in your onFulfilled callback.

// Finally, print the fulfilled value of that new promise with console.log.



require('es6-promise');
'use strict';

first()
.then(function(secretVal) {
    return second(secretVal);
})
.then(console.log);


