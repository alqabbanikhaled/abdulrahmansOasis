// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const merchant_key = "215506a4-d853-11ed-a593-ce576dc0b828";
// const merchant_key = "215504e2-d853-11ed-b522-ce576dc0b828";
const merchant_pass = "3752f816b13d5c69bfa20eac0e637445";
const app_url = "https://abdelrahmanoasis-kpg3ggywpa-uc.a.run.app/";
const cancel_url = app_url + "donate-us?status=cancel";
const success_url = app_url + "donate-us?status=success";

import CryptoJS from "crypto-js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let captcha = req.body.recaptcha;
    // If captcha are missing return an error
    if (!captcha) {
      return res.status(422).json({
        message: "Unproccesable request, no captcha",
      });
    }
    const orderno = Math.floor(Math.random() * 90000) + 10000;
    var order = {
      "number": "order-" + 2000,
      "amount": parseFloat(req.body.amount).toFixed(2),
      "currency": "SAR",
      "description": "Donation"
    }
    var to_md5 = order.number + order.amount + order.currency + order.description + merchant_pass;

    var hash = CryptoJS.SHA1(CryptoJS.MD5(to_md5.toUpperCase()).toString());

    var resultHash = CryptoJS.enc.Hex.stringify(hash);
    var data = {

      "merchant_key": merchant_key,
      "operation": "purchase",
      "order": order,
      "cancel_url": cancel_url,
      "success_url": success_url,
      "hash": resultHash,
      "customer": {
        "name": "John Doe",
        "email": "test@gmail.com"
      }
    }
    const JSONdata = JSON.stringify(data);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSONdata,
      redirect: 'follow'
    };


    await fetch("https://pay.expresspay.sa/api/v1/session", requestOptions)
      .then(async response => {
        if (response.status !== 200) {
          res.status(response.status).json(response.statusText)
        } else {
          const resp = await response.json();
          res.status(200).json(resp);
        }
      })
      .then(result => 
        {console.log('result',result)}
        )
      .catch(error => console.log('error', error));



  }
}
