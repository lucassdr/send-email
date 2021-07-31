const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');

module.exports = {
    async sendMail(req, res) {

        let data = req.body

        let subTotal = 0, shipping = 5.99


        data.items.map((item) => {
            subTotal += (item.unitPrice * item.qtd)
        })


        //step 1
        let transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASS
            }
        });

        const handlebarOptions = {
            viewEngine: {
                extName: '.hbs',
                partialsDir: 'views/',
                layoutsDir: 'views/',
                defaultLayout: '',
            },
            viewPath: 'views/',
            extName: '.hbs',
        };

        transporter.use('compile', hbs(handlebarOptions))

        //step 2
        let mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: process.env.EMAIL_USERNAME,
            subject: 'Recebemos sua escolha',
            text: 'Neste tutorial você está descobrindo isso.',
            template: 'index',
            context: {
                dateOrder: data.dateOrder,
                customerName: data.customerName,
                orderID: data.orderID,
                items: data.items,
                subTotal: Math.round(subTotal).toFixed(2),
                shipping: Math.round(shipping).toFixed(2),
                total: Math.round(subTotal + shipping).toFixed(2)
            }
        }

        //step 3

        try {
            let response = await transporter.sendMail(mailOptions)
            return res.status(200).json({message: 'Sucesso ao enviar email', response})
        } catch (error) {
            return res.json({message: 'Houve um problema ao enviar o email', error})
        }

    }
}






