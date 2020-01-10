const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport( {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASS
    }
} )

const emailSend = {
    from: process.env.EMAIL_ACCOUNT,
    to: process.env.EMAIL_ACCOUNT,
    subject: 'Como enviar e-mails utilizando Node.js',
    text:'Neste tutorial vocÊ está descobrindo isso.'
}

transporter.sendMail( emailSend )
    .then( info => {
        console.log('E-mail enviado com sucesso em: ' + nodemailer.getTestMessageUrl(info))
})
