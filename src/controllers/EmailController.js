const nodemailer = require("nodemailer");

module.exports = {
    async sendMail(dados){
        const {email , nome, assunto,mensagem} = dados

        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
            },
        });

        
        let info = await transporter.sendMail({
            from: '"Opinião Aplicativo" <nao-responda@noticia.com>',
            to: `opinia@noticia.com, ${email}`,
            subject: `Opiniao: ${assunto}`, 
            text: `Ola ${nome}\n
            Sua opinião foi a seguinte: ${mensagem}`, 
            html: `<b>Ola ${nome}</br>
            Sua opinião foi a seguinte: ${mensagem}</b>`, 
        });
        console.log('aquitar')
        console.log( nodemailer.getTestMessageUrl(info))
        return{
            "Message": info.messageId,
            "url": nodemailer.getTestMessageUrl(info)
            
        };
        
    }
}