document.addEventListener("DOMContentLoaded", function(){
    juegosAccion = JSON.parse(juegosAccion);
    juegosAventura = JSON.parse(juegosAventura);
    juegosRpg = JSON.parse(juegosRpg);


    var listado = document.getElementById("game-list");

        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegosAccion[0].link + "'class='game'><div class='image'><img src='" + juegosAccion[0].imagen + "'></div><div class='info'><span class='title'>" + juegosAccion[0].nombre + "</span><br>" + juegosAccion[0].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegosAccion[0].antes + "</div><div class='after'>$<span class='big'>" + juegosAccion[0].ahora + "</span></div></div><div class='discount'>-" + juegosAccion[0].descuento + "%</div></div></a></li>";
        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegosAventura[0].link + "'class='game'><div class='image'><img src='" + juegosAventura[0].imagen + "'></div><div class='info'><span class='title'>" + juegosAventura[0].nombre + "</span><br>" + juegosAventura[0].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegosAventura[0].antes + "</div><div class='after'>$<span class='big'>" + juegosAventura[0].ahora + "</span></div></div><div class='discount'>-" + juegosAventura[0].descuento + "%</div></div></a></li>";
        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegosRpg[0].link + "'class='game'><div class='image'><img src='" + juegosRpg[0].imagen + "'></div><div class='info'><span class='title'>" + juegosRpg[0].nombre + "</span><br>" + juegosRpg[0].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegosRpg[0].antes + "</div><div class='after'>$<span class='big'>" + juegosRpg[0].ahora + "</span></div></div><div class='discount'>-" + juegosRpg[0].descuento + "%</div></div></a></li>";

});







/*    var listado = document.getElementById("lista-estudiantes");

    for(var i = 0; i < estudiantes.length; i++){
        listado.innerHTML = listado.innerHTML + "<li><img src='" + estudiantes[i].foto + "'><h1>" + estudiantes[i].nombre + "</h1><p>" + estudiantes[i].apellido + "</p></li>";
    }
});
*/