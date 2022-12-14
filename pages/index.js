import styles from '../styles/Arte.module.css';
import VerticalFooter from '../components/verticalFooter/verticalFooter';
import { jsPDF } from "jspdf";
import cls from 'classnames';
import Image from 'next/image';
import html2canvas from "html2canvas";
import frontal from '../public/frontal.png';
import reverso from '../public/reverso.png';

export default function Arte() {

    const handleClick = () => {
        // p es para hoja vertical 'portrait'
        // pt es para medicion en puntos de la hoja
        // letter permite declarar el tipo de papel a usar, en este caso carta
        const doc = new jsPDF('p', 'pt', 'a4');
        const margin = 10;
        const certificate = document.querySelector('#doc');
        const scale = (certificate.offsetWidth - margin * 2) / certificate.offsetWidth;
        html2canvas(certificate, {allowTaint: true});
        doc.internal.write(0, "Tw");
        doc.html(certificate, {
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

    const savePDF = () => {
        const doc = new jsPDF('p', 'pt', 'a4');
        const margin = 10;
        const certificate = document.querySelector('#doc');
        const scale = (doc.internal.pageSize.width - margin * 2) / certificate.offsetWidth;
        doc.internal.write(0, "Tw");
        doc.html(certificate, {
            x: margin,
            y: margin,
            html2canvas: {
                scale: scale,
                allowTaint: true,
            },
            callback: function(doc) {
                doc.output('save', { filename: 'arte.pdf' });
            }
        })
    }

    return (
        <div className={styles.container}>

            <main className={styles.art}>
                <div className={styles.buttonContainer}>
                    {/*
                    <button onClick={handleClick}>VER PDF</button>
                    */}
                    <button onClick={savePDF}>DESARGAR PDF</button>
                </div>
                <div className={styles.documentContainer}>
                    <div id='doc' className={styles.document}>
                        <section className={styles.upper}>
                            <div className={styles.left}>
                                <div className={styles.block}>
                                    <div className={styles.parameterContainer}>
                                        <span className={styles.parameter}>C??digo / Numeraci??n</span>
                                    </div>
                                    <span className={styles.value}>VSA01104231A001</span>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.parameterContainer}>
                                        <span className={styles.parameter}>Ref. VERTICAL</span>
                                    </div>
                                    <span className={styles.value}>MRS001 <span className={styles.whitespace}>|</span>- 2022</span>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <span className={styles.title}>VERTICAL</span>
                                <span className={styles.subtitle}>Sociedad del Arte</span>
                            </div>
                        </section>
                        <section className={styles.mainUpper}>
                            <span className={styles.title}>CERTIFICADO <span className={styles.whitespace}>_</span>DE AUTENTICIDAD DE OBRA <span className={styles.whitespace}>|</span>DE ARTE</span>
                            <span className={styles.description}>El presente documento <span className={styles.bold}>CERTIFICA</span> <span className={styles.whitespace}>|</span>que la Obra titulada <span className={styles.bold}>CONQUISTADOR <span className={styles.whitespace}>|</span>CON SOMBRERO <span className={styles.whitespace}>|</span>VIOLETA </span> 
                                de autor??a de <span className={styles.bold}>MANUEL REND??N SEMINARIO</span> (1927), constituye una pieza ??nica, original y aut??ntica, la misma que se describe 
                                seg??n el siguiente detalle t??cnico:</span>
                        </section>
                        <section className={styles.table1}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={styles.image} rowSpan='11'><Image src={frontal} alt='' width={300} height={300}/></td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>Autor</td>
                                        <td className={styles.value}><span className={styles.bold}>Manuel Rend??n Seminario</span> (Par??s, Francia 1894 - Vila Vicosa, Portugal 1980)</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>T??tulo</td>
                                        <td className={styles.value}>CONQUISTADOR <span className={styles.whitespace}>__</span>CON SOMBRERO <span className={styles.whitespace}>_</span>VIOLETA</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>Lugar y a??o</td>
                                        <td className={styles.value}>Par??s <span className={styles.whitespace}>|</span>,1927</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>Colecci??n <span className={styles.whitespace}>|</span>/ serie</td>
                                        <td className={styles.value}>ND</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>Categor??a</td>
                                        <td className={styles.value}>Pintura</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>Dimensi??n</td>
                                        <td className={styles.value}>38 x 29 cm</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>Inscripci??n</td>
                                        <td className={styles.value}>{'"Rend??n" firmado en parte inferior izquierda'}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>T??cnica <span className={styles.whitespace}>|</span>y soporte</td>
                                        <td className={styles.value}>Acuarela sobre cartulina</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>Estado <span className={styles.whitespace}>|</span>de conservaci??n</td>
                                        <td className={styles.value}>Excelente</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.parameter}>Notas</td>
                                        <td className={styles.value}>Tem??tica relacionada con la presentaci??n que hace el artista en torno a los conquistadores espa??oles , a quienes pint?? en una serie de obras con rostros deformados</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <section className={styles.extraPics}>
                            <div className={styles.left}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className={styles.image} rowSpan='11'><Image src={reverso} alt='' width={120} height={150}/></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <span style={{'fontSize': '10px', 'color': 'grey'}}>Reverso</span>
                            </div>
                            <div className={styles.right}>
                                <Image src='/firma.png' alt='' width={120} height={150}/>
                                <span style={{'fontSize': '10px', 'color': 'grey'}}>Inscripci??n / Firma</span>
                            </div>
                        </section>
                        {/*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA*/ }
                        <section className={styles.confirmacion}>
                            <span>El artista abajo firmamente acredita mediante este certificado que la obra en menci??n constituye una obra ??nica, original y aut??ntica de autor??a de Manuel Rend??n Seminario. 
                                Todos los derechos de autor y reproducci??n est??n reservados por el artista.-
                            </span>
                            <div className={styles.firmaSection}>
                                <div className={styles.left}>
                                    <div className={styles.upper}>
                                        <span>Firma</span>
                                    </div>
                                    <div className={styles.lower}>
                                        <span>Manuel Rend??n Seminario</span>
                                    </div>
                                </div>
                                <div className={styles.center}>
                                    <Image src='/logoConf.png' alt='' width={50} height={50}/>
                                </div>
                                <div className={styles.right}>
                                    <span>El presente certificado ha sido emitido formalmente por VERTICAL SOCIEDAD DEL ARTE, de conformidad con los protocolos y procedimientos internos, basados
                                        en est??ndares de calidad y transparencia; la informaci??n consignada en ??l ha sido la proporcionada por el Artista/Experto Certificador. VERTICAL <span className={styles.whitespace}>|</span>SOCIEDAD DE
                                        ARTE no intervino en los procesos de creaci??n, revisi??n ni autenticaci??n de la obra aqui certificada, los cuales fueron de exclusiva autor??a del Artista/Experto
                                        certificador.</span>
                                </div>
                            </div>
                        </section>
                        <section className={styles.datosExtra}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={cls(styles.greyFont, styles.firstColumn)}>C??digo / Numeraci??n</td>
                                        <td className={cls(styles.greyFont, styles.secondColumn)}>VSA01104231A001</td>
                                        <td className={cls(styles.greyFont, styles.thirdColumn)}>Hash</td>
                                        <td className={styles.fourthColumn}>c57f6ac1b71f45a07dbd91a59fa47c23abcd87c2 <span className={styles.whitespace}> _ </span>: <span className={styles.whitespace}></span>631225</td>
                                    </tr>
                                    <tr>
                                        <td className={cls(styles.greyFont, styles.firstColumn)}>Fecha emisi??n original</td>
                                        <td className={cls(styles.greyFont, styles.secondColumn)}>2022<span className={styles.whitespace}>|</span> -09<span className={styles.whitespace}>|</span> -16</td>
                                        <td className={cls(styles.greyFont, styles.thirdColumn)}>Timestamp</td>
                                        <td className={styles.fourthColumn}>c23abcd87c - 6:29 a. m.16/9/22</td>
                                    </tr>
                                    <tr>
                                        <td className={cls(styles.greyFont, styles.firstColumn)}>Fecha emisi??n de versi??n actual certificado</td>
                                        <td className={cls(styles.greyFont, styles.secondColumn)}>2022<span className={styles.whitespace}>|</span> -09 -16</td>
                                        <td className={cls(styles.greyFont, styles.thirdColumn)}>Otros VERTICAL</td>
                                        <td className={cls(styles.greyFont, styles.fourthColumn)}>C798797ccc897977384</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={styles.qr}>
                                <span>qrCode</span>
                            </div>
                        </section>
                        <VerticalFooter />
                        <div className={styles.pageJump}></div>
                        <section className={styles.upper}>
                            <div className={styles.left}>
                                <div className={styles.block}>
                                    <div className={styles.parameterContainer}>
                                        <span className={styles.parameter}>Codigo / Numeracion</span>
                                    </div>
                                    <span className={styles.value}>VSA01104231A001</span>
                                </div>
                                <div className={styles.block}>
                                    <div className={styles.parameterContainer}>
                                        <span className={styles.parameter}>Ref. VERTICAL</span>
                                    </div>
                                    <span className={styles.value}>MRS001 <span className={styles.whitespace}>|</span>- 2022</span>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <span className={styles.title}>VERTICAL</span>
                                <span className={styles.subtitle}>Sociedad del Arte</span>
                            </div>
                        </section>
                        <section className={styles.provenienciaTable}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={styles.greytd} colSpan='4'>PROVENIENCIA / REGISTRO <span className={styles.greyspace}>|</span>DE PROPIEDAD</td>
                                    </tr>
                                    <tr>
                                        <td>{'<Fecha Adquisicion>'}</td>
                                        <td>Comprador Original / Colecci??n</td>
                                        <td>Pa??s</td>
                                        <td>Informaci??n vendedor / Galer??a</td>
                                    </tr>
                                    <tr>
                                        <td>{'<Fecha Adquisicion>'}</td>
                                        <td>Comprador Original / Colecci??n</td>
                                        <td>Pa??s</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td>{'<Fecha Adquisicion>'}</td>
                                        <td>Comprador Original / Colecci??n</td>
                                        <td>Pa??s</td>
                                        <td> </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={styles.disclaimer}>
                                <span>Disclaimer 3 - Provenance - VERTICAL</span>
                            </div>
                        </section>
                        <section className={styles.publicacionesTable}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={styles.greytd} colSpan='3'>INFORMACI??N PUBLICACIONES <span className={styles.greyspace}>__</span>/ EXHIBICIONES <span className={styles.greyspace}>|</span>/ MUESTRAS</td>
                                    </tr>
                                    <tr>
                                        <td>{'<Fecha >'}</td>
                                        <td>Informaci??n</td>
                                        <td>Ciudad, Pa??s</td>
                                    </tr>
                                    <tr>
                                        <td>{'<Fecha >'}</td>
                                        <td>Informaci??n</td>
                                        <td>Ciudad, Pa??s</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <section className={styles.relevante}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={styles.greytd} colSpan='2'>OTRA INFORMACI??N RELEVANTE</td>
                                    </tr>
                                    <tr>
                                        <td>{'<Fecha >'}</td>
                                        <td> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <section className={styles.artista}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={styles.greytd} colSpan='2'>INFORMACI??N ARTISTA</td>
                                    </tr>
                                    <tr>
                                        <td>Breve rese??a</td>
                                        <td>Nacionalidad <br/>Nacimiento <br/>Trayectoria <br/>Reconocimientos</td>
                                    </tr>
                                    <tr>
                                        <td>Informaci??n</td>
                                        <td>P??gina web <br/>Redes sociales</td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                        <section className={styles.disclaimerGeneral}>
                            <span>DISCLAIMER <span className={styles.whitespace}>__</span>GENERAL <span className={styles.whitespace}>__</span>VERTICAL</span>
                        </section>
                        <VerticalFooter />
                    </div>
                </div>
            </main>

        </div>
    )
}