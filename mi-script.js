document.addEventListener("DOMContentLoaded", function(){
    juegos = JSON.parse(juegos);


    var listado = document.getElementById("game-list");

        listado.innerHTML = listado.innerHTML + "<li><a href='" + juegos[0].link + "'class='game'><div class='image'><img src='" + juegos[0].imagen + "'></div><div class='info'><span class='title'>" + juegos[0].nombre + "</span><br>" + juegos[0].marca + "</div><div class='windows' title='Windows'></div><div class='price'><div class='total'><div class='before'>$" + juegos[0].antes + "</div><div class='after'>$<span class='big'>" + juegos[0].ahora + "</span></div></div><div class='discount'>-" + juegos[0].descuento + "%</div></div></a></li>";
});







/*    var listado = document.getElementById("lista-estudiantes");

    for(var i = 0; i < estudiantes.length; i++){
        listado.innerHTML = listado.innerHTML + "<li><img src='" + estudiantes[i].foto + "'><h1>" + estudiantes[i].nombre + "</h1><p>" + estudiantes[i].apellido + "</p></li>";
    }
});
*/