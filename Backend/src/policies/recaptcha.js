const axios = require("axios");
require("dotenv");
module.exports = async (ctx, next) => {
  // url params
  const { token } = ctx.request.body.data;
  const remoteip = ctx.req.connection.remoteAddress;

  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=6LdRJSElAAAAALFn8aXfrOBCZ9BkohlZfQq4kvaj&response=${token}&remoteip=${remoteip}`;
  let validation = await axios.post(verifyURL).then(function (response) {
    if (response.data.success !== undefined && !response.data.success) {
      console.log("you should not pass" + response.data.success);
      ctx.unauthorized(`Failed captcha`);
    }
    else {
      console.log("you should pass" + response.data.success);
      //    return true;
    }
  });
  // return false;
  return next();
};
