document.addEventListener("DOMContentLoaded", function(){
    var precio = 2000;
    var envio = 0;
    var subTotal = 0;
    var total = 0;
    var imp = 0.22;

    var cantidadJuego = document.getElementById("cantidad-juego");
    var cantidadTotalJuego = document.getElementById("cantidad-total-juego");
    var precioTotalJuego = document.getElementById("precio-total-juego");
    var envioComun = document.getElementById("envio-comun");
    var envioEspecial = document.getElementById("envio-especial");
    var envioPremium = document.getElementById("envio-premium");
    var costoEnvio = document.getElementById("envio");
    var impuestos = document.getElementById("imp");
    var costoTotal = document.getElementById("total");
    var wrapper = document.getElementById("wrapper");
    var unidad = document.getElementById("unidad");
    var fisico = document.getElementById("fisico");
    var digital = document.getElementById("digital");
    var precioEnvio = document.getElementById("shipping-price");

    precioTotalJuego.innerHTML = precio;
    impuestos.innerHTML = imp * precio;     
    costoTotal.innerHTML = imp * precio + precio;
    cantidadTotalJuego.innerHTML = "1";
    unidad.innerHTML = "ud."

    wrapper.addEventListener("change", function(){
        var cantidad = cantidadJuego.value;
        cantidad = parseInt(cantidad);
        cantidadTotalJuego.innerHTML = cantidad;
        subTotal = cantidad * precio;
        precioTotalJuego.innerHTML = subTotal;
        var envioVal = envio + 1;

        if (fisico.checked) {
            document.getElementById("shipping").style.display = 'block'
        } else if (digital.checked) {
            document.getElementById("shipping").style.display = 'none';
        }
        
        if (fisico.checked) {
            precioEnvio.style.display = 'table-row';
        } else if (digital.checked) {
            precioEnvio.style.display = 'none';
            envio = 0;
        }

        if (envioComun.checked) {
            envio = 0.005;
            document.getElementById("ship-qual").innerHTML = "común";
            document.getElementById("ship-quan").innerHTML = "0.5%"
        } else if (envioEspecial.checked) {
            envio = 0.02;
            document.getElementById("ship-qual").innerHTML = "especial";
            document.getElementById("ship-quan").innerHTML = "2%"
        } else if (envioPremium.checked){
            envio = 0.05;
            document.getElementById("ship-qual").innerHTML = "premium";
            document.getElementById("ship-quan").innerHTML = "5%"
        }

        if (cantidad > 1){
            unidad.innerHTML = " uds."
        } else if (cantidad = 1) {
            unidad.innerHTML = " ud."
        }

    /*    impuestos.innerHTML = imp * precio * cantidad * envioVal; */
        var impuestosVal = costoEnvio0 + ;
        costoEnvio0 = subTotal * envio;
        costoEnvio.innerHTML = costoEnvio0;
        costoTotal.innerHTML = precio * (imp + 1) * cantidad + costoEnvio * imp ;
    });


});