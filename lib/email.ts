const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = "    ";

const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const client = mailgun.client({ username: "api", key: API_KEY });

const messageData = {
  from: "Excited User <me@samples.mailgun.org>",
  to: "foo@example.com, bar@example.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomeness!",
};

client.messages
  .create(DOMAIN, messageData)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
