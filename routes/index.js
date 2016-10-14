const express = require('express');
const router = express.Router();
const schedule = require('node-schedule');
const http = require('http');
var to_json = require('xmljson').to_json;
var request = require('request');

// const dateFormatter = require('./date-formatter');
// var db = require('../db/api')

router.get('/', function(req, res, next) {
  res.json('YAY!');
  // db.getWindData().then(function(data) {
  //   res.json(data);
  // });
});

Date.prototype.YYYYMMDD = function() {
  var date = new Date();
  var day = (date.getDate()).toString();
  var DD = !day[1] ? "0"+day : day;
  var month = (date.getMonth() + 1).toString();
  var MM = !month[1] ? "0"+month : month;
  var YYYY = this.getFullYear();
  var date2 = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  var day2 = (date2.getDate()).toString();
  var DD2 = !day2[1] ? "0"+day2 : day2;
  var month2 = (date2.getMonth() + 1).toString();
  var MM2 = !month2[1] ? "0"+month2 : month2;
  var YYYY2 = (date2.getFullYear()).toString();
  return [[YYYY, MM, DD].join("-"), [YYYY2, MM2, DD2].join("-")];
};
var date = (new Date()).YYYYMMDD();
console.log("date=", date);

function getDataFromNOAA() {
  return request('http://graphical.weather.gov/xml/sample_products/browser_interface/ndfdXMLclient.php?centerPointLat=38.0&centerPointLon=-97.4&distanceLat=50.0&distanceLon=50.0&resolutionSquare=20.0&product=time-series&begin=" + date[0] + "T00:00:00&end=" + date[1] + "T00:00:00&wdir=wdir&wspd=wspd&wdir=wdir', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      to_json(body, function (error, data) {
          // console.log(data);
          console.log(JSON.stringify(data));
      });
    }
  })
}
// getDataFromNOAA()

module.exports = router;
