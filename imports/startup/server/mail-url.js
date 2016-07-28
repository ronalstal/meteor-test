
const mailgun = JSON.parse(Assets.getText("mailgun-login.json"));

process.env.MAIL_URL = "smtp://postmaster%40" + mailgun.address + ".mailgun.org:" +
                       mailgun.password +"@smtp.mailgun.org:587";
