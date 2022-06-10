const nodemailer = require('nodemailer');
const { header, footer} = require('../templates/template.email')

function SolicitudMateria(orden){
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
    let titulo = `<h1>Hola Yraida,</h1>`
    var mailOptions = {
        from: '"SIO - Sistema Integral de Operacion" <sio.soporte@poligraficaindustrial.com>',
        to: "calcurianandres@gmail.com",
        // to: "calcurianandres@gmail.com, Yraida.Baptista@poligraficaindustrial.com",
        subject: `Solicitud de Materiales`,
        html:`${header(titulo)}
        <br>
               Se ha generado una solicitud de material relacionado con la orden de produccion:
               <br>
               <h1 align="center">Nº ${orden}</h1>
               <br>
               No olvides ingresar al sistema para asignar material haciendo click <a href='http://192.168.0.23:8080/almacen'>Aqui</a>
            ${footer}`
    };
    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    });
}

module.exports = {
    SolicitudMateria
}