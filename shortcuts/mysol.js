require('es6-promise');

'use strict'




// We don’t have any specific task we’d like to assign to you for this lesson.
// Feel free to explore all three functions at your own pace. When you are
// preparing to submit though, make sure you are using at least catch and one
// of Promise.resolve and Promise.reject ☺



const p1 = Promise.resolve('SUCCESS');
const p2 = Promise.reject('FAIL!');

p2.catch(console.log);