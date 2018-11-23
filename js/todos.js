document.addEventListener("DOMContentLoaded", function(){
    juegosAccion = JSON.parse(juegosAccion);
    juegosAventura = JSON.parse(juegosAventura);
    juegosRpg = JSON.parse(juegosRpg);


    var listado = document.getElementById("game-list");
    for(var i = 0; i < juegosAccion.length; i++){
        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegosAccion[i].link + "'class='game'><div class='image'><img src='" + juegosAccion[i].imagen + "'></div><div class='info'><span class='title'>" + juegosAccion[i].nombre + "</span><br>" + juegosAccion[i].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegosAccion[i].antes + "</div><div class='after'>$<span class='big'>" + juegosAccion[i].ahora + "</span></div></div><div class='discount'>-" + juegosAccion[i].descuento + "%</div></div></a></li>";
    }
    for(var e = 0; e < juegosAventura.length; e++){
        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegosAventura[e].link + "'class='game'><div class='image'><img src='" + juegosAventura[e].imagen + "'></div><div class='info'><span class='title'>" + juegosAventura[e].nombre + "</span><br>" + juegosAventura[e].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegosAventura[e].antes + "</div><div class='after'>$<span class='big'>" + juegosAventura[e].ahora + "</span></div></div><div class='discount'>-" + juegosAventura[e].descuento + "%</div></div></a></li>";
    }
    for(var u = 0; u < juegosRpg.length; u++){
        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegosRpg[u].link + "'class='game'><div class='image'><img src='" + juegosRpg[u].imagen + "'></div><div class='info'><span class='title'>" + juegosRpg[u].nombre + "</span><br>" + juegosRpg[u].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegosRpg[u].antes + "</div><div class='after'>$<span class='big'>" + juegosRpg[u].ahora + "</span></div></div><div class='discount'>-" + juegosRpg[u].descuento + "%</div></div></a></li>";
    }
});