var Reserva = function(horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
}

// Funcion que calcula el precio Base de una reserva en función de la cantidad de personas y el precio 
//por persona
Reserva.prototype.precioBase = function () {
    if (this.chequeoDePersonas()){
    return this.cantidadDePersonas * this.precioPorPersona
    }else {
        swal({
            title: "Error",
            text: "Ingrese una cantidad de Personas para la reserva",
            icon: "error",
            button: "Continuar",
        });
        
        return 0
    }
}

// Función que calcula un adicional a la reserva según horarios pico y días pico
// hora pico entre las 13 y las 14 o entre las 19 y 22Hs
// días pico, sábados y domingos
Reserva.prototype.adicionalReserva = function () {
    var porcentaje = 0;

    if ((this.horario.getHours() >= 13) && (this.horario.getHours() <= 14) || (this.horario.getHours() >= 19) && (this.horario.getHours() <= 22)) {
        
        porcentaje += 5;
    } 
    if ((this.horario.getDay() === 0) || (this.horario.getDay() === 6)) {
        
        porcentaje += 10;
    }
    var adicional = (this.precioBase() * porcentaje / 100);
    console.log(adicional);
    return adicional
}

// Función que calcula los descuentos que se aplican a la reserva que puede ser:
// por cantidad de personas
// o bien agregando un código de descuento específico
Reserva.prototype.calculoDescuentos = function () {
    var muchasPersonas = 0;
    if (this.cantidadDePersonas > 8){
        muchasPersonas = 15;
    }
    if ((this.cantidadDePersonas === 7) || (this.cantidadDePersonas === 8)){
        muchasPersonas = 10;
    }
    if ((this.cantidadDePersonas >= 4) && (this.cantidadDePersonas <= 6)) {
        muchasPersonas = 5;
    }
    
    // Se calcula el valor de los descuentos según la cantidad de personas con los porcentajes
    var resultado = (this.precioBase() * muchasPersonas) / 100;
    
    //Se calcula el valor de descuento adicional segun el código de descuento
    if (this.codigoDeDescuento === "DES15") {
        resultado = resultado + (this.precioBase() * 0.15);
    }
    if (this.codigoDeDescuento === "DES200") {
        
        resultado = resultado + 200;
        
    }
    if (this.codigoDeDescuento === "DES1") {
        resultado = resultado + this.precioPorPersona;
    }

    console.log(resultado);
    // Se retorna el valor total de descuentos por cantidad de personas + código de descuento
    return resultado
    
}

Reserva.prototype.precioFinal = function () {
    return this.precioBase() - this.calculoDescuentos() + this.adicionalReserva()
}

Reserva.prototype.chequeoDePersonas = function () {
    if (this.cantidadDePersonas === 0) {
        return false
    }else {
        return true
    }

}




