const {DocumentDefinition, Table, Cell, Txt, Img, Stack} = require('pdfmake-wrapper/server');
const Pdfmake = require('pdfmake');

const {devolucion, devolucion2} = require('../emails/devolucion.email')
const moment = require('moment')

const fs = require('fs')

const nodemailer = require('nodemailer');

async function FAL006(orden,solicitud, materiales, lotes, cantidades, motivo, usuario){


//console.log(materiales,'materiales')

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


const hoy = moment().format('DD/MM/yyyy');


doc.pageOrientation('landscape');
// doc.footer('Si usted esta consultando una versión de este documento, Asegúrese que sea la vigente');

if(solicitud >= 10){
    solicitud = `00${solicitud}`
}
else if(solicitud >= 100){
    solicitud = `0${solicitud}`
}
else if(solicitud < 10){
  solicitud = `000${solicitud}`
}

doc.add(

    

    new Table([
        [
            new Cell(
                await new Img(__dirname + '/images/poli_cintillo.png', true).width(85).margin([20, 5]).build()
            ).rowSpan(4).end,
            new Cell(new Txt(`
            FORMATO DE DEVOLUCIÓN DE MATERIAL`).bold().end).alignment('center').fontSize(13).rowSpan(4).end,
            new Cell(new Txt('Código: FAL-006').end).fillColor('#dedede').fontSize(7).alignment('center').end,
        ],
        [
            new Cell(new Txt('').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('N° de Revisión: 0').end).fillColor('#dedede').fontSize(7).alignment('center').end,
        ],
        [
            new Cell(new Txt('').end).end,
            new Cell(new Txt('').end).end,
            new Cell(new Txt('Fecha de Revisión: 11/10/2022').end).fillColor('#dedede').fontSize(7).alignment('center').end,
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
        new Cell(new Txt('FECHA DE DEVOLUCIÓN').end).fillColor('#dedede').fontSize(10).alignment('center').end,
        new Cell(new Txt(`${hoy}`).end).end,
        new Cell(new Txt('N° DEVOLUCIÓN').end).fillColor('#dedede').fontSize(10).alignment('center').end,
        new Cell(new Txt(`AL-DEV-${solicitud}`).end).fontSize(15).alignment('center').end,
      ],
      [
        new Cell(new Txt('UNIDAD ADMINISTRATIVA').end).fillColor('#dedede').fontSize(10).alignment('center').end,
        new Cell(new Txt('GERENCIA DE OPERACIONES').end).end,
        new Cell(new Txt('ORDEN DE PRODUCCIÓN').end).fillColor('#dedede').fontSize(10).alignment('center').end,
        new Cell(new Txt(`${orden}`).end).alignment('center').end,
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
            new Cell(new Txt('CANTIDAD DEVUELTA').end).fillColor('#dedede').fontSize(9).alignment('center').end,
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
            new Cell(new Txt('MOTIVO').end).fillColor('#dedede').fontSize(9).alignment('center').end,
            new Cell(new Txt('DEVUELTO POR:').end).fillColor('#dedede').fontSize(9).alignment('center').end,
            new Cell(new Txt('RECIBIDO POR:').end).fillColor('#dedede').fontSize(9).alignment('center').end,
        ],
        [
            new Cell(new Txt(motivo).end).fontSize(11).end,
            new Cell(new Txt(`
            FIRMA: ${usuario}

            FECHA:${hoy}
            `).end).fontSize(9).end,
            new Cell(new Txt(`
            FIRMA: YRAIDA BAPTISTA

            FECHA:${hoy}
            `).end).fontSize(9).end,

        ]

    ]).widths(['50%','25%','25%']).end
)

doc.add(
    new Txt('Si usted esta consultando una versión de este documento, Asegúrese que sea la vigente').alignment('right').fontSize(8).end
)




const pdf = printer.createPdfKitDocument(doc.getDefinition());
pdf.end();



// asignacion(orden, solicitud, Lote, pdf,'Equipo', 'calcurian.andrew@gmail.com,enida.aponte@poligraficaindustrial.com,carlos.mejias@poligraficaindustrial.com,freddy.burgos@poligraficaindustrial.com')
   devolucion(orden, solicitud, pdf,'Equipo', 'enida.aponte@poligraficaindustrial.com,carlos.mejias@poligraficaindustrial.com,freddy.burgos@poligraficaindustrial.com,yraida.baptista@poligraficaindustrial.com')
    // devolucion2(orden, 'Jaime', 'jaime.sanjuan@poligraficaindustrial.com')
//  asignacion(orden, Lote, pdf,'Carlos', 'carlos.mejias@poligraficaindustrial.com')
    //  asignacion(orden, Lote, pdf,'Freddy', 'freddy.burgos@poligraficaindustrial.com')
    return

}

module.exports = {
    FAL006
}