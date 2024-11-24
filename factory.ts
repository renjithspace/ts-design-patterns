abstract class Driver {
  abstract send(): string;
}

class SMTP extends Driver {
  send() {
    return "Mail send using SMTP";
  }
}

class Mailgun extends Driver {
  send() {
    return "Mail send using Mailgun";
  }
}

class Mail {
  static use(Driver: new () => Driver): Driver {
    return new Driver();
  }
}

const smtp = Mail.use(SMTP);
console.log(smtp.send());

const mailgun = Mail.use(Mailgun);
console.log(mailgun.send());
