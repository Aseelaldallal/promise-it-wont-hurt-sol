


'use strict'

function parsePromised(json) {
    return new Promise(function(fulfill, reject) {
        let result;
        try {
            fulfill(JSON.parse(json));
        } catch (error) {
            reject(error);
        }
    })
}

parsePromised(process.argv[2])
.then(function(result) {
     console.log("SUCCESS: ", result);
})
.catch(function(error) {
    console.log(error.message);
}) 