const request = require('request');
request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5168,0.1342&radius=3000&type=bar&key=AIzaSyDsnRK5MJv24hYok7tbKZup3O67aeQqB1M', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});