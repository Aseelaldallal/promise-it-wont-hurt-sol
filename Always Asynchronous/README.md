
 Promise It Won’t Hurt
───────────────────────
 Always asynchronous
 Exercise 5 of 13

(node:16936) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.

# Are promises always resolved asynchronously?

The ES2015 spec declares that promises must not fire their
resolution/rejection function on the same turn of the event loop that they are
created on. This is very important because it eliminates the possibility of
execution order varying and resulting in indeterminate outcomes.

You can expect that the functions passed to the then method of a
promise will be called on the next turn of the event loop.

## Task

In this lesson, we are going to prove to ourselves that promises are always
asynchronous.

First, create a promise using the Promise constructor.

In the promise’s executor, immediately fulfill the promise with a value of
'PROMISE VALUE'.

After the creation of the promise, pass console.log as the success handler to
the promise.

Finally, print out “MAIN PROGRAM” with console.log.

## Hints

If the execution of promise is synchronous, the value of the promise is already
known after its construction. The console.log passed into then would then
be executed as soon as the then is called.

However, if your script is successful, you should see “MAIN PROGRAM” before
“PROMISE VALUE”.

This shows you that despite the promise being resolved synchronously, the
provided function is not executed until the next turn of the event loop.


 » To print these instructions again, run: promise-it-wont-hurt print
 » To execute your program in a test environment, run: promise-it-wont-hurt run program.js
 » To verify your program, run: promise-it-wont-hurt verify program.js
 » For help run: promise-it-wont-hurt help



Aseel@DESKTOP-J4G0PHN MINGW64 /d/Aseel/Programming/Javascript/Courses/NodeSchool/promise-shop
$