var unirest = require("unirest");

function jsonStringify(obj) {
  return JSON.stringify(obj, null, 2);
}

export async function apiRequest(apiHost, method, basePath, reqBody) {

  var host = apiHost,
    path = basePath,
    host = host + path,
    headers = {
      "x-rapidapi-key": "020a376fc7mshe7657db96f6a5bep10391cjsn667089873ac4",
      "x-rapidapi-host": "veriphone.p.rapidapi.com",
      "useQueryString": true
    }

  if (headers) {
    if (typeof headers !== 'string')
      headers = jsonStringify(headers);
  }

  if (reqBody) {
    if (typeof reqBody !== 'string')
      reqBody = jsonStringify(reqBody);
  }

  var req = unirest(method, host);

  req.headers(JSON.parse(headers));

  if (method == 'GET')
    req.query(JSON.parse(reqBody));

  if (method == 'POST')
    req.getBody(JSON.parse(reqBody));

  req.end(function (res) {
    res.setEncoding('utf8');
  //  if (res.error) throw new Error(res.error);
    // console.log("******************************RESP*********************************88")
    // console.log("--------rep body--------------------\n" + jsonStringify(res.body));
  });
  return req
}

//-----------------------------------------------------------------------------
//
// Request to API Gateway.
//
// export async function apiRequest(apiHost, method) {

//   var host = apiHost
//     path = basePath

// var req = unirest(method, host);

// req.query({
// 	"phone": "+4915123577723"
// });

// req.headers({
// 	"x-rapidapi-key": "020a376fc7mshe7657db96f6a5bep10391cjsn667089873ac4",
// 	"x-rapidapi-host": "veriphone.p.rapidapi.com",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// console.log("***************************************************************88")
// 	console.log(res.body);
// });
//}