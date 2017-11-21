// Try swapping your rejection handler from console.log to alwaysThrows.
// Your program will now throw an exception in the global context!  Ahh!
// Try to fix this using the approach described above.

alwaysThrows = () => {
    throw new Error("OH NOES");
}

iterate = (arg) => {
    console.log(arg);
    return arg + 1;
}

onReject = (error) => {
    console.log(error.message)
}

Promise
.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.catch(onReject);