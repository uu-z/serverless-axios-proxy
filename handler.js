const axios = require("axios");

module.exports.proxy = async (event, context, callback) => {
  const body = typeof event.body == "string" ? JSON.parse(event.body) : event.body;
  let { data } = await axios(body);
  const response = { statusCode: 200, body: JSON.stringify(data) };

  callback(null, response);
};
