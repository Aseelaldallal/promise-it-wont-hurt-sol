'use strict'


function attachTitle(arg1) {
    return 'DR. ' + arg1;
}

Promise.resolve('MANHATTAN')
.then(attachTitle)
.then(console.log);

