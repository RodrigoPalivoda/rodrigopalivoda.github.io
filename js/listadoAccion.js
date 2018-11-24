document.addEventListener("DOMContentLoaded", function(){
    juegosAccion = JSON.parse(juegosAccion);
    var listado = document.getElementById("game-list");
    for(var i = 0; i < juegosAccion.length; i++){
        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegosAccion[i].link + "'class='game'><div class='image'><img src='" + juegosAccion[i].imagen + "'></div><div class='info'><span class='title'>" + juegosAccion[i].nombre + "</span><br>" + juegosAccion[i].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegosAccion[i].antes + "</div><div class='after'>$<span class='big'>" + juegosAccion[i].ahora + "</span></div></div><div class='discount'>-" + juegosAccion[i].descuento + "%</div></div></a></li>";
    }
});