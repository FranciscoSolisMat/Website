const terms = [
    {
        title: 'Aceptación',
        content: `Estos son los términos de servicio (los "Términos") entre FranciscoSolis ("FranciscoSolis"), el dueño y operador del sitio web, y cualquier serivio asociado ofrecido (colectivamente la "Plataforma") y tu ("tu", "tuyo" o "usuario(s)"), un usuario de la plataforma.`
    },
    {
        title: 'Condiciones de uso',
        content: `Estos Términos se aplican a todos los usuarios de la Plataforma. Al acceder a la Plataforma, aceptas estos Términos. Si no estás de acuerdo con estos Términos, no debes acceder a la Plataforma.`
    },
    {
        title: 'Modificaciones',
        content: `FranciscoSolis se reserva el derecho de modificar estos Términos en cualquier momento. Los cambios se entenderán efectivos cuando sean publicados en la Plataforma.`
    },
    {
        title: 'Información de contacto',
        content: `Si tienes alguna pregunta sobre estos Términos, puedes contactar con FranciscoSolis a través del correo <a href="mailto:fran@franciscosolis.cl" target="_blank" class="text-brand-300">fran@franciscosolis.cl</a>.`
    },
    {
        title: 'Información de privacidad',
        content: `La información que recibimos por parte de los usuarios es confidencial y no será compartida con nadie. Si tienes dudas respecto a la <a href="/politica-de-privacidad" target="_blank" class="text-brand-300">Política de Privacidad</a> por favor revisala en su respectiva página.`,
    },
    {
        title: 'Descargo de responsabilidad',
        content: `<b>LA PLATAFORMA Y TODOS LOS SERVICIOS SE PROPORCIONAN "TAL CUAL", "SEGÚN DISPONIBILIDAD" Y "CON TODAS LAS FALLAS". EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, NI FRANCISCOSOLIS, NI NINGUNO DE NUESTROS EMPLEADOS, GERENTES, FUNCIONARIOS, CESIONARIOS O AGENTES HACEN DECLARACIONES O GARANTÍAS O APROBACIONES DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, EN CUANTO A: (1) LA PLATAFORMA; (2) CUALQUIER INFORMACIÓN PROPORCIONADA ATRAVÉS DE LA PLATAFORMA; (3) LOS SERVICIOS, O (4) LA SEGURIDAD ASOCIADA CON LA TRANSMISIÓN DE INFORMACIÓN A FRANCISCOSOLIS, O ATRAVÉS DE LA PLATAFORMA. ADEMÁS, RENUNCIAMOS A TODAS LAS GARANTÍAS, EXPRESAS O IMPLÍCITAS, INCLUIDAS, PERO NO LIMITADAS A, LAS GARANTÍAS DE COMERCIABILIDAD, APTITUD PARA UN PROPÓSITO PARTICULAR, PÉRDIDA DE BENEFICIOS, NO INFRACCIÓN, TÍTULO, PERSONALIZACIÓN, COMERCIO Y DISFRUTE DEL SISTEMA LIBRE. DEL VIRUS DE LA COMPUTADORA.<br><br>FRANCISCOSOLIS NO REPRESENTA NI GARANTIZA QUE LA PLATAFORMA QUE INCLUYE LOS SERVICIOS ESTARÁ LIBRE DE ERRORES O ININTERRUMPIDA; QUE LOS DEFECTOS SERÁN CORREGIDOS; O QUE LA PLATAFORMA O EL SERVIDOR QUE HACE QUE LA PLATAFORMA ESTÉ DISPONIBLE ESTÉ LIBRE DE CUALQUIER COMPONENTE DAÑINO. FRANCISCOSOLIS NO HACE NINGUNA DECLARACIÓN O GARANTÍA DE QUE LOS SERVICIOS OFRECIDOS SEAN EXACTOS, COMPLETOS O ÚTILES. FRANCISCOSOLIS NO GARANTIZA QUE SU USO DE LA PLATAFORMA SEA LEGAL EN NINGUNA JURISDICCIÓN EN PARTICULAR, Y FRANCISCOSOLIS RENUNCIA ESPECÍFICAMENTE A TALES GARANTÍAS.</b>`
    },
    {
        title: 'Política de Reembolsos',
        content: `Los reembolsos solo son posibles si y solo si: (1) Tu compra fue hace menos de 7 días; (2) El producto disponible a la fecha contiene fallos, o errores que impiden la funcionalidad completa de las características principales descritas; (3) Has contactado al equipo de soporte el cual te ha indicado que el(los) problema(s) o fallo(s) no tienen solucion alguna; (4) No has solicitado otro reembolso en un plazo de 14 días.<br><br>En caso de ser elegible para un reembolso por favor envía un correo a <a href="mailto:fran@franciscosolis.cl" target="_blank" class="text-brand-300">fran@franciscosolis.cl</a>.`
    }
];


const contenidos=document.getElementById('contenidos');const termsBody=document.getElementById('terms-body');let i=1;terms.forEach(term=>{const li=document.createElement('li');const a=document.createElement('a');a.classList.add('hover:text-brand-300','hover:underline');a.href='#'+term.title.toLowerCase().replace(/ /g,'-');a.innerHTML=`${ i }. ${term.title }`;li.appendChild(a);contenidos.appendChild(li);const h2=document.createElement('h2');h2.id=term.title.toLowerCase().replace(/ /g,'-');h2.classList.add('text-xl','mt-10','underline');h2.innerHTML=`${ i }. ${term.title }`;termsBody.appendChild(h2);const p=document.createElement('p');;p.innerHTML=term.content;termsBody.appendChild(p);i+=1});