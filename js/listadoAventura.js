document.addEventListener("DOMContentLoaded", function(){
    juegosAventura = JSON.parse(juegosAventura);
    var listado = document.getElementById("game-list");
    for(var e = 0; e < juegosAventura.length; e++){
        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegosAventura[e].link + "'class='game'><div class='image'><img src='" + juegosAventura[e].imagen + "'></div><div class='info'><span class='title'>" + juegosAventura[e].nombre + "</span><br>" + juegosAventura[e].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegosAventura[e].antes + "</div><div class='after'>$<span class='big'>" + juegosAventura[e].ahora + "</span></div></div><div class='discount'>-" + juegosAventura[e].descuento + "%</div></div></a></li>";
    }
});