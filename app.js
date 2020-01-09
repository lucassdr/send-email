const nodemailer = require( 'nodemailer' )
require('dotenv').config()

let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASS
    }
});

const emailSend = {
    from: process.env.EMAIL_ACCOUNT,
    to: process.env.EMAIL_ACCOUNT,
    subject: 'Enviando meu primeiro e-mail com Node.js',
    text:'Um e-mail enviado de localhost com Node.js'
}


transporter.sendMail( emailSend ).then( info => {
            console.log('E-mail enviado com sucesso em: ' + nodemailer.getTestMessageUrl(info))
})