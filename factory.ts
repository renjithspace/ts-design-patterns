abstract class Driver {
  abstract send(): string;
}

class SMTP extends Driver {
  send(): string {
    return "Mail send using SMTP";
  }
}

class Mailgun extends Driver {
  send(): string {
    return "Mail send using Mailgun";
  }
}

class Mail {
  static connect<T>(Class: new () => T): T {
    return new Class();
  }
}

const smtp = Mail.connect(SMTP);
console.log(smtp.send());

const mailgun = Mail.connect(Mailgun);
console.log(mailgun.send());
