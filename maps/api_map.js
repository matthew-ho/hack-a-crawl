const request = require('xmlhttprequest');

module.exports = {
getPubs : function (lat, long) {
  var json;
  var httpReq;
  httpReq = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
  httpReq += lat.toString() + ',' + long.toString();
  httpReq += '&radius=3000&type=bar&key=AIzaSyDsnRK5MJv24hYok7tbKZup3O67aeQqB1M';
  let req = new request.XMLHttpRequest();
  req.open("GET", httpReq,false);
  req.send();
  var result = JSON.parse(req.responseText);
  var firstPubs = result.results.slice(0, 5);
  var firstPubsNames = [];
  firstPubs.forEach(pub => firstPubsNames.push(pub.name));
  firstPubsNames.forEach(pubName => console.log(pubName));
  return firstPubsNames;
  }
}

