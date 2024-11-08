abstract class Notificacao{
    mensagem: string;
    constructor(mensagem: string){
        this.mensagem = mensagem;
    }

    exibirMensagem(): string{
        return this.mensagem;
    }

    abstract enviar(): void;
}

class NotificacaoEmail extends Notificacao{
    enviar(): void {
        console.log(`A mensagem ${this.exibirMensagem()}`);
    }
}

class NotificacaoSMS extends Notificacao{
    enviar(): void {
        console.log(`A mensagem ${this.exibirMensagem()}`);
    }
}

const email = new NotificacaoEmail('email!')
const sms = new NotificacaoSMS('sms!')

console.log(email.exibirMensagem())
email.enviar();
console.log(sms.exibirMensagem())
sms.enviar();
