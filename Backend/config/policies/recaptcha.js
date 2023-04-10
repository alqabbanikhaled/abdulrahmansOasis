const axios = require("axios");
require("dotenv");
module.exports = async (ctx, next) => {
  // url params
  const { token } = ctx.request.body;
  const remoteip = ctx.req.connection.remoteAddress;
  const secret_key = '6LdRJSElAAAAALFn8aXfrOBCZ9BkohlZfQq4kvaj';

  //console.log("captcha key is:" + secret_key);
  //console.log("token is:" + token);
  //console.log("remote IP:" + remoteip);

  const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}&remoteip=${remoteip}`;
  let validation = await axios.post(verifyURL).then(function (response) {
    if (response.data.success !== undefined && !response.data.success) {
      //console.log("you should not pass" + response.data.success);
      ctx.unauthorized(`Failed captcha`);
    }
  });

  return await next();
};
