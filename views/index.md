---
title: Inicio
path: /
route: index
---

<div class="mx-5">
    <h1 class="text-2xl text-brand-500 dark:text-brand-600">Hola! Soy Francisco (Fran) :p</h1>
    <p class="text-brand-500 dark:text-brand-600">Soy un creador de software y creador de contenido. Mi pronombre es <span class="text-brand-300">El</span>. Ultimamente he estado aprendiendo a utilizar Node.js, pero mayormente trabajo con Java, php, JavaScript y HTML.</p>
    <h1 class="text-2xl text-brand-500 dark:text-brand-600 mt-10">Estos son mis proyectos:</h1>
    <div class="grid md:grid-cols-3 gap-6 mt-2">
        <!-- calendariodemre (project) - Calendario Demre - Cuenta atrás para todas las fechas publicadas por <a class="text-brand-300" target="_blank" href="https://demre.cl/">DEMRE</a> -->
        <div class="col-span-1 flex items-center justify-center">
            <div class="bg-gray-200 dark:bg-gray-800 rounded-md py-5 px-3 border border-brand-500 hover:shadow-2xl duration-500 transition-shadow text-brand-500 cursor-pointer visit-project" project="calendariodemre" onclick="visitProject('calendariodemre')">
                <h3 class="text-lg font-bold text-brand-100">Calendario Demre</h3>
                <p class="text-brand-500 dark:text-brand-600">Por la necesidad de tener una cuenta atrás para todas las fechas publicadas por <a class="text-brand-300" target="_blank" href="https://demre.cl/">DEMRE</a>.</p>
            </div>
        </div>
        <!-- Links - (repo) - Servicio de Links - Una página para almacenar tus links con iconos de fontawesome. <a class="text-brand-300" target="_blank" href="https://links.franciscosolis.cl/">Ejemplo</a>.  -->
        <div class="col-span-1 flex items-center justify-center">
            <div class="bg-gray-200 dark:bg-gray-800 rounded-md py-5 px-3 border border-brand-500 hover:shadow-2xl duration-500 transition-shadow text-brand-500 cursor-pointer visit-repo" repo="Links">
                <h3 class="text-lg font-bold text-brand-100">Links</h3>
                <p class="text-brand-500 dark:text-brand-600">Servicio de Links - Una página para almacenar tus links con iconos gratuitamente! <a class="text-brand-300" target="_blank" href="https://links.franciscosolis.cl/">Ejemplo</a>.</p>
            </div>
        </div>
        <!-- CovidDataVisualizer - (repo) - Graficos COVID-19 - Una página para ver datos mundiales de COVID-19 en forma de graficos.  -->
        <div class="col-span-1 flex items-center justify-center">
            <div class="bg-gray-200 dark:bg-gray-800 rounded-md py-5 px-3 border border-brand-500 hover:shadow-2xl duration-500 transition-shadow text-brand-500 cursor-pointer visit-repo" repo="CovidDataVisualizer">
                <h3 class="text-lg font-bold text-brand-100">Graficos COVID-19</h3>
                <p class="text-brand-500 dark:text-brand-600">Una página para ver datos mundiales de COVID-19 en forma de graficos.</p>
            </div>
        </div>
    </div>
</div>