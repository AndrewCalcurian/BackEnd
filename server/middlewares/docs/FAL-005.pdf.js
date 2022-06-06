const {DocumentDefinition, Table, Cell, Txt, Img, Stack} = require('pdfmake-wrapper/server');
const Pdfmake = require('pdfmake');

const { NuevaOrden2, NuevaOrden3 } = require('../emails/nuevo.email')
const moment = require('moment')

const printer = new Pdfmake({
    Roboto: {
        normal: __dirname + '/fonts/Roboto/Roboto-Regular.ttf',
        bold: __dirname + '/fonts/Roboto/Roboto-Medium.ttf',
        italics: __dirname + '/fonts/Roboto/Roboto-Italic.ttf',
        bolditalics: __dirname + '/fonts/Roboto/Roboto-MediumItalic.ttf'
    }
});

/**
 * By default, Pdfmake uses 'Roboto' fonts, if you want 
 * to use custom fonts, you need to use the useFont method 
 * like this:
 * 
 * DocumentDefinition.useFont('MyCustomFonts');
 */

const doc = new DocumentDefinition();

async function FAL005(orden, Lote, materiales, lotes, cantidades){

const hoy = moment().format('DD/MM/yyyy');


doc.pageOrientation('landscape');
doc.footer('Si usted esta consultando una versión de este documento, Asegúrese que sea la vigente');


doc.add(

    

    new Table([
        [
            new Cell(
                await new Img(__dirname + '/images/poli_cintillo.png', true).width(85).margin([20, 5]).build()
            ).rowSpan(4).end,
            new Cell(new Txt(`
            ASIGNACIÓN DE MATERIAL`).bold().end).alignment('center').fontSize(13).rowSpan(4).end,
            new Cell(new Txt('Código: FAL-005').end).fillColor('#dedede').fontSize(7).alignment('center').end,
        ],
        [
            new Cell(new Txt('').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('N° de Revisión: 0').end).fillColor('#dedede').fontSize(7).alignment('center').end,
        ],
        [
            new Cell(new Txt('').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Fecha de Revisión: 03/05/2022').end).fillColor('#dedede').fontSize(7).alignment('center').end,
        ],
        [
            new Cell(new Txt('').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Página: 1 de 1').end).fillColor('#dedede').fontSize(7).alignment('center').end,
        ]
    ]).widths(['25%','50%','25%']).end
);

doc.add(
    '\n'
)

doc.add(
    new Table([
      [
        new Cell(new Txt('FECHA DE ASIGNACIÓN').end).fillColor('#dedede').fontSize(10).alignment('center').end,
        new Cell(new Txt(`${hoy}`).end).end,
        new Cell(new Txt('N° ASIGNACIÓN').end).fillColor('#dedede').fontSize(10).alignment('center').end,
        new Cell(new Txt('AL-ASG-001').end).fontSize(15).alignment('center').end,
      ],
      [
        new Cell(new Txt('UNIDAD ADMINISTRATIVA').end).fillColor('#dedede').fontSize(10).alignment('center').end,
        new Cell(new Txt('GERENCIA DE OPERACIONES').end).end,
        new Cell(new Txt('ORDEN DE PRODUCCIÓN').end).fillColor('#dedede').fontSize(10).alignment('center').end,
        new Cell(new Txt(`${orden}`).end).end,
      ]
    ]).widths(['25%','25%','25%','25%']).end
  )

doc.add(
    '\n'
)

doc.add(
    new Table([
        [
            new Cell(new Txt('DESCRIPCIÓN DEL MATERIAL').end).fillColor('#dedede').fontSize(9).alignment('center').end,
            new Cell(new Txt('N° DE LOTE').end).fillColor('#dedede').fontSize(9).alignment('center').end,
            new Cell(new Txt('CANTIDAD ASIGNADA').end).fillColor('#dedede').fontSize(9).alignment('center').end,
        ],
        [
            new Cell(new Stack(materiales).end).end,
            new Cell(new Stack(lotes).end).end,
            new Cell(new Stack(cantidades).end).end
        ]
    ]).widths(['50%','25%','25%']).end
)

doc.add(
    '\n'
)

doc.add(
    new Table([
        [
            new Cell(new Txt('OBSERVACIÓN').end).fillColor('#dedede').fontSize(9).alignment('center').end,
            new Cell(new Txt('ASIGNADO POR:').end).fillColor('#dedede').fontSize(9).alignment('center').end,
            new Cell(new Txt('RECIBIDO POR:').end).fillColor('#dedede').fontSize(9).alignment('center').end,
        ],
        [
            new Cell(new Txt(`

            N/A
            
            `).end).fontSize(9).alignment('center').end,
            new Cell(new Txt(`
            FIRMA: YRAIDA BAPTISTA

            FECHA:${hoy}
            `).end).fontSize(9).end,
            new Cell(new Txt(`
            FIRMA: ENIDA APONTE

            FECHA:${hoy}
            `).end).fontSize(9).end,

        ]

    ]).widths(['33%','34%','33%']).end
)




const pdf = printer.createPdfKitDocument(doc.getDefinition());

// pdf.pipe(fs.createWriteStream('document.pdf'));
pdf.end();
    
    NuevaOrden2(orden, Lote, pdf);
    NuevaOrden3(orden, Lote, pdf);

    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: process.env.CORREO,
    //         pass: process.env.PASS_CORREO
    //     }
    // });
    
    // var mailOptions = {
    //     from: '"Soporte Técnico" <thermo.soporte.group@gmail.com>',
    //     // to: 'calcurian.andrew@gmail.com, zuleima.vela@poligraficaindustrial.com, jaime.sanjuan@poligraficaindustrial.com',
    //     to: 'calcurian.andrew@gmail.com,',
    //     subject: 'test',
    //     html:'Este es un mensaje automatico enviado por el Sistema SIO',
    //     attachments: [{
    //         filename: 'test.pdf',
    //         content:pdf
    //     }]
    // };
    
    // transporter.sendMail(mailOptions, (err, info)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(info);
    //     }
    // });

}

module.exports = {
    FAL005
}