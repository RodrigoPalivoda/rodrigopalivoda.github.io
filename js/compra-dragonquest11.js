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
    var deposito = document.getElementById("deposito");
    var tarjeta = document.getElementById("tarjeta");
    var rdo1 = document.getElementById("rdo1");
    var rdo2 = document.getElementById("rdo2");
    var mail = document.getElementById("mail");
    var numeroTarjeta = document.getElementById("numero-tarjeta");
    var cedula = document.getElementById("cedula");
    var direccion = document.getElementById("direccion");


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


        if (rdo1.checked) {
            deposito.style.display = "block";
            tarjeta.style.display = "none";
            numeroTarjeta.removeAttribute("required");
            cedula.removeAttribute("required");
        } else if (rdo2.checked) {
            deposito.style.display = "none";
            tarjeta.style.display = "block";
            numeroTarjeta.setAttribute("required");
            cedula.setAttribute("required");
        }


        if (fisico.checked) {
            document.getElementById("shipping").style.display = 'block';
            precioEnvio.style.display = 'none';
            direccion.setAttribute("required");
        } else if (digital.checked) {
            document.getElementById("shipping").style.display = 'none';
            precioEnvio.style.display = 'table-row';
            direccion.removeAttribute("required");
            envio.value = 0;
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

        document.getElementById("mail1").innerHTML = mail.value;

        var envioTotal = envio * subTotal;
        costoEnvio.innerHTML = envioTotal;
        var impTotal = (subTotal + envioTotal) * 0.22;
        impuestos.innerHTML = impTotal;
        var costoTotalTotal = subTotal + envioTotal + impTotal;
        costoTotal.innerHTML = costoTotalTotal;
        
    });


});