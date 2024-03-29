const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  // console.log("request:*******************",req)
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  
  res.writeHead(200, headers);
  var swimArr = ['up','down','left','right']
  
  res.end(swimArr[Math.floor(Math.random()*4)]);
  next(); // invoke next() at the end of a request to help with testing!
};
