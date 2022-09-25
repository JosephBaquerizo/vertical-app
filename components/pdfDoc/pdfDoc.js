import { useState } from 'react';


export default function PdfDoc() {

    const handleClick = () => {
        // p es para hoja vertical 'portrait'
        // pt es para medicion en puntos de la hoja
        // letter permite declarar el tipo de papel a usar, en este caso carta
        const doc = new jsPDF('p', 'pt', 'letter');
        const margin = 10;
        const scale = (doc.internal.pageSize.width - margin * 2) / document.body.scrollWidth;
        doc.html(document.body, {
            x: margin,
            y: margin,
            html2canvas: {
                scale: scale,
            },
            callback: function(doc) {
                doc.output('dataurlnewwindow', { filename: 'fichero-pdf.pdf' });
            }
        })
    }

    return (
        <div>
            <span>Hello</span>
        </div>
    )
}