var unirest = require("unirest");

function jsonStringify(obj) {
  return JSON.stringify(obj, null, 2);
}

export async function apiRequest(apiHost, method, basePath, headers, reqBody) {

  var host = apiHost,
    path = basePath,
    host = host + path

  if (headers) {
    if (typeof headers !== 'string')
      headers = jsonStringify(headers);
  }
  console.log("-----------------------------Headers-----------------------------\n")
  console.log(headers)

  if (reqBody) {
    if (typeof reqBody !== 'string')
      reqBody = jsonStringify(reqBody);
  }
  console.log("---------------------------Query String / Body----------------------\n")
  console.log(reqBody)

  var req = unirest(method, host);

  req.headers(JSON.parse(headers));
  req.type("json");
  if (method == 'GET')
    req.query(JSON.parse(reqBody));

  if (method == 'POST')
    req.send(JSON.parse(reqBody));

  req.end(function (res) {
    res.setEncoding('utf8');
  });
  return req
}