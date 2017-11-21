

all = (p1, p2) => {
    let values = [];
    let counter = 0;
    function incrementAndPush(val) {
        counter++;
        values.push(val);
    }
    return new Promise(function(fulfill, reject) {
        p1
        .then(incrementAndPush)
        .then(function() {
            return p2;
        })
        .then(incrementAndPush)
        .then(function() {
            fulfill(values);
        })
    });
}

all(getPromise1(), getPromise2())
.then(console.log)

