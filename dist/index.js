"use strict";
class Notificacao {
    constructor(mensagem) {
        this.mensagem = mensagem;
    }
    exibirMensagem() {
        return this.mensagem;
    }
}
class NotificacaoEmail extends Notificacao {
    enviar() {
        console.log(`A mensagem ${this.exibirMensagem()}`);
    }
}
class NotificacaoSMS extends Notificacao {
    enviar() {
        console.log(`A mensagem ${this.exibirMensagem()}`);
    }
}
const email = new NotificacaoEmail('email!');
const sms = new NotificacaoSMS('sms!');
console.log(email.exibirMensagem());
email.enviar();
console.log(sms.exibirMensagem());
sms.enviar();
