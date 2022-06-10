const nodemailer = require('nodemailer');
const {header, header2, footer} = require('../templates/template.email')

function cache(){

    var transporter = nodemailer.createTransport({
        host: "mail.poligraficaindustrial.com",
        port: 25,
        secure: false,
        auth: {
            user: 'sio.soporte@poligraficaindustrial.com',
            pass: 'P0l1ndc@'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: '"SIO - Sistema Integral de Operacion" <sio.soporte@poligraficaindustrial.com>',
        to: 'sio.soporte@poligraficaindustrial.com',
        subject: `Nueva orden de producción`,
        html:`cache`
    };
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err);
        }else{
            console.log(info)
            return
        }
    });
}

module.exports = {
    cache
}
