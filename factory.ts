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
  static connect(Class: new () => Driver): Driver {
    return new Class();
  }
}

const smtp = Mail.connect(SMTP);
console.log(smtp.send());

const mailgun = Mail.connect(Mailgun);
console.log(mailgun.send());
