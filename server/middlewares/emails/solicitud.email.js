const nodemailer = require('nodemailer');
const {header2, footer} = require('../templates/template.email');
let {tituloCorreo} = require('../templates/template.email')

function NuevaSolicitud(orden,correo,motivo,num_solicitud,adjunto){
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


    let titulo = `<h1>Hola Yraida!</h1>`
    var mailOptions = {
        from: '"SIO - Sistema Integral de Operacion" <sio.soporte@poligraficaindustrial.com>',
        to: correo,
        subject: `Solicitud de Material`,
        attachments: [{
            filename: `AL-SOL-${num_solicitud}_${orden}.pdf`,
            content:adjunto
        }],
        html:`${header2(titulo)}
        <br>
               Se ha realizado una nueva solicitud de material asociada a la Orden de Producción:
               <br>
               <h1 align="center">Nº ${orden}</h1>
               <br>
               <style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
    <b>Motivo:</b>${motivo}<br>
    Dirigete al sistema SIO para asignar lo lotes.

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
    NuevaSolicitud
}
