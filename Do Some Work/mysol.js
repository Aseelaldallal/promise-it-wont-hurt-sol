
// Let's talk to two remote processes over HTTP being run by your friend
// and mine, "localhost".

//   * Port 7000: Faux session cache (Redis or some such thing)
//   * Port 7001: Faux database (MongoDB, LevelDB, Postgres, etc)

// As in the previous lesson, use the q-io module to create promises
// as wrappers for HTTP responses.  Hint: You will probably need more
// than one promise…

// //   * Send an HTTP GET request to the session cache on port 7000.  A stringwill 
// be returned to you representing a user ID.
// //   * Grab that ID from the session response and send an HTTP GET request toyour 
// database on port 7001 to the url `localhost:7001/<id>`.
// //   * If successfully done, your database will return a user object.`console.log` 
// it to win many nerd-points.

require('es6-promise');
let qhttp = require("q-io/http");

'use strict';

onReject = error => {
    console.log(error.message);
}

qhttp.read("http://localhost:7000")
     .then(function(userID) {
        let id = userID.toString();
        let url = "http://localhost:7001/" + id;
        return qhttp.read(url);
     })
     .then(function(user) {
         console.log(JSON.parse(user));
     })
     .catch(onReject);
