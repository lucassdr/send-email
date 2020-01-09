const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport( {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jules.schmitt@ethereal.email',
        pass:'UdsY2yqrKD6Uhx4fVJ'
    }
} )

const emailSend = {
    from: 'jules.schmitt@ethereal.email',
    to: 'jules.schmitt@ethereal.email',
    subject: 'Como enviar e-mails utilizando Node.js',
    text:'Neste tutorial vocÊ está descobrindo isso.'
}

transporter.sendMail( emailSend )
    .then( info => {
        console.log('E-mail enviado com sucesso em: ' + nodemailer.getTestMessageUrl(info))
})
