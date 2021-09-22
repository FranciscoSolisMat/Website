const terms = [
    {
        title: 'Introducción',
        content: `Personalmente creo que la privacidad es un derecho fundamental, es por eso que me dedicaré a proteger la tuya. Este documento regirá cualquier otro sitio web, complemento, programa, o contenido que esté registrado bajo el dominio de franciscosolis.cl (colectivamente "Servicios").`
    },
    {
        title: 'Definición y Aceptación',
        content: `<em><b>En simple:</b> Al hacer uso de los Servicios declaras haber leído la versión más reciente y aceptas el documento.</em><br><br>La Política de Privacidad (este documento) es un documento que describe cómo se maneja la información personal que recibie el sitio web de ti dentro de los Servicios, y cómo esa información es protegida a menos que se indique lo contrario. Además, al hacer uso de los Servicios declaras haber leído la versión más reciente, tener conocimiento de que existe y aceptas la Política de Privacidad.`
    },
    {
        title: 'Información que entregas',
        content: `<em><b>En simple:</b> Solo si entregas informacion, será administrada.</em><br><br>Existen dos (2) posibles escenarios para esta seccion: Programas Responsivos y Programas Estátitcos. Los Programas Responsivos son aquellos en los que de manera voluntaria entregarás informacion, la cual será manejada de manera cuidadosa y personalizada para brindarte la mejor protección de privacidad que se puede ofrecer. Los Programas Estaticos, tal como este sitio web (www.franciscosolis.cl), son programas a los cuales no necesitas hacer ingreso de datos voluntarios, por lo que en esta categoría de programas no existe informacion que entregues voluntariamente que sea manejable.<br>El que se indique la palabra <span class="font-bold">voluntaria</span> no significa ni confirma que haya informacion que sea recolectada de manera involuntaria.`
    },
    {
        title: 'Información que se recibe de terceros',
        content: `<em><b>En simple:</b> Informacion manejada por terceros están gobernadas por sus respectivos documentos.</em><br><br>Algunos Servicios pueden utilizar servicios de terceros para recibir información personal. Estos servicios pueden ser de terceros que se encuentran en nuestros Servicios o de terceros que no están registrados en nuestros Servicios. Para más información consulta la política de privacidad de los terceros: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" class="text-brand-300 hover:underline font-bold hover:opacity-75">Cloudflare</a>`
    },
    {
        title: 'Accesando y modificando tu información',
        content: `<em><b>En simple:</b> Podras acceder a tu información y modificarla en cualquier momento.</em><br><br>Para acceder a tu información personal si es que entregaste alguna por favor envía un correo a <a href="mailto:contacto@franciscosolis.cl" class="text-brand-300">contacto@franciscosolis.cl</a>.`
    },
    {
        title: 'Opcion Sin Seguimiento',
        content: `<em><b>En simple:</b> Podras optar por no envíar información personal y bloquear rastreadores.</em><br><br>Para optar por no recibir información personal puedes activar en tu buscador (si está disponible) la opcion que envía una solicitud de 'No Rastrear' al sitio web o terceros.`,
    },
    {
        title: 'Cumplimiento de edad',
        content: `<em><b>En simple:</b> Si eres menor de 13 años por favor abandona el sitio web.</em><br><br>Quiero cumplir con las leyes internacionales relacionada con la privacidad de menores, por lo que informacion que es indicada proveniente de menores de 13 años no es manejada ni procesada por los Servicios. Si eres menor de 13 años por favor abandona el sitio web.`,
    },
    {
        title: 'Transferencia de informacion internamente',
        content: `<em><b>En simple:</b> Tu información puede ser transferida internamente.</em><br><br>En el caso de que FranciscoSolis se vea relacionado con quiebra, unificación, adquisición, reorganización, o venta de bienes, la informacion recolectada puede ser vendida y/o transferida como parte de esa transacción. Esto significa que una vez que la transferencia sea realizada es posible que tus derechos de privacidad se vean afectados.`,
    },
    {   
        title: 'Cambios en la Política de Privacidad',
        content: `<em><b>En simple:</b> Si la Política de Privacidad es actualizada, será notificado a través de nuestro sitio web.</em><br><br>Si la Política de Privacidad es actualizada, aunque sea un cambio mínimo, será notificado a través de este documento en la sección de <a href="#cambios" class="text-brand-300">cambios</a>.`
    },
    {
        title: 'Cierre',
        content: `<em><b>En simple:</b> Si no estás de acuerdo con la Política de Privacidad, por favor abandona el sitio web.</em><br><br>Si no estás de acuerdo con la Política de Privacidad, por favor abandona el sitio web. En caso de tener dudas por favor contacta al correo <a href="mailto:contacto@franciscosolis.cl" class="text-brand-300">contacto@franciscosolis.cl</a>.`
    },
    {
        title: 'Cambios',
        content: `<em><b>En simple:</b> Esta es la lista de cambios al documento. (Más reciente al más antiguo)</em><br><br>- Publicación del Documento (Lunes 20 de Septiembre, 2021 - 21:50 PM CLT)`
    }
];


const contenidos=document.getElementById('contenidos');const termsBody=document.getElementById('pp-body');let i=1;terms.forEach(term=>{const li=document.createElement('li');const a=document.createElement('a');a.classList.add('hover:text-brand-300','hover:underline');a.href='#'+term.title.toLowerCase().replace(/ /g,'-');a.innerHTML=`${ i }. ${term.title }`;li.appendChild(a);contenidos.appendChild(li);const h2=document.createElement('h2');h2.id=term.title.toLowerCase().replace(/ /g,'-');h2.classList.add('text-xl','mt-10','underline');h2.innerHTML=`${ i }. ${term.title }`;termsBody.appendChild(h2);const p=document.createElement('p');;p.innerHTML=term.content;termsBody.appendChild(p);i+=1});