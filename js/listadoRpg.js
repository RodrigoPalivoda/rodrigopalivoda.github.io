document.addEventListener("DOMContentLoaded", function(){
    juegosRpg = JSON.parse(juegosRpg);


    var listado = document.getElementById("game-list");
    for(var u = 0; u < juegosRpg.length; u++){
        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegosRpg[u].link + "'class='game'><div class='image'><img src='" + juegosRpg[u].imagen + "'></div><div class='info'><span class='title'>" + juegosRpg[u].nombre + "</span><br>" + juegosRpg[u].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegosRpg[u].antes + "</div><div class='after'>$<span class='big'>" + juegosRpg[u].ahora + "</span></div></div><div class='discount'>-" + juegosRpg[u].descuento + "%</div></div></a></li>";
    }
});