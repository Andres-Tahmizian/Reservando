

var expect = chai.expect;

describe( 'Testeando la clase restorante', function(){
    let restaurante = listadoDeRestaurantes[0];
    it ('El horario correspondiente se elimina del arreglo.', function(){
        //Esta funcion deberia eliminar el horario del arreglo de horarios
        restaurante.reservarHorario('13:00');
        expect(restaurante.horarios).to.include('15:30', '18:00').but.not.include('13:00')
    })
    
    it ('Si no exiten el horario, no se modifica', function () {
        //Esta funcion al intentar eliminar un horario que no existe no modifica el arreglo
        restaurante.reservarHorario('13:00');
        expect(restaurante.horarios.length).to.equal(2);
    })

    it('Si no pesee cambios, queda igual', function () {
        restaurante.reservarHorario('');
        expect(restaurante.horarios.length).to.equal(2);
    })
});

describe('Testeando la clase obtenerPuntuacion' , function(){
    let restaurant = listadoDeRestaurantes[0];
    let puntuacion = restaurant.obtenerPuntuacion();
    
    it ('Si tiene puntuacion, calcular correctamente.', function() {
        if(restaurant.calificaciones.length > 0) {
            expect(puntuacion).to.equal(7.4)
        }
    });

    it ('Si no tiene calificacion, la puntuacion es 0' , function (){
        if(restaurant.calificaciones.length == 0) {
            expect(puntuacion).to.equal(0)
        }
    });
});

describe('Testeando la clase Calificar', function () {
    let calificado = listadoDeRestaurantes[0];
    let puntuacion = calificado.obtenerPuntuacion();
    
    
    it ('Evalua si es mayor que 0' , function () {
        if (calificado.calificaciones.length > 0){
            expect(puntuacion).to.equal(7.4)
        }
    });
    
    it ('Evalua si es menor a 10', function () {
        if (calificado.calificaciones.length < 10){
            expect(puntuacion).to.equal(7.4)
        }
    });
});
describe('Testear la funcion buscarRestaurante', function () {

    let restoId = listadoDeRestaurantes[0];
    // Me traigo el ID de en la posicion 0
    let resto = restoId.id;
    
    it('Si la seleccion del restaurante es correcta ', function () {
        if( resto == 0){
            //Espero que me muestre el id en la posicion 0.
            expect(restoId).to.equal(1)
        }
    });
});
describe('Testeá la función obtenerRestaurantes', function () {
    //me traigo solo los restaurantes en la primera ubicacion.
    let resto = listadoDeRestaurantes[0];
    
    it('Si la seleccion es un restaurante', function () {
        if(resto.nombre.length == 0) {
            // espero que consida la posicion con el nombre del restaurante.
            expect(resto).to.equal("TAO Uptown")
       };
       
    });
});
describe('Testea la clase Reserva', function(){
    //Me traigo el objeto Reserva con sus parametros para testear
    
    let reserva1 = new Reserva (new Date(2019, 1, 24, 13, 30), 3, 500, "DES200")
    let reserva2 = new Reserva (new Date(2019, 6, 29, 11, 00), 10, 500, 'SinDescuento')
    let reserva3 = new Reserva (new Date(2019, 1, 24, 13, 30), 3, 500, "DES15")
    
    it ('Calcule si el precio base es correcto', function(){

        expect(reserva1.precioBase()).to.equal(1500);
    
    });
    it('Calcula el precio final', function(){

        expect(reserva1.precioFinal()).to.equal(1525);
    })
    it('Calcula el precio final, sin descuento', function(){

        expect(reserva2.precioFinal()).to.equal(4250);
    })
    it('Calcula el precio final, con un descuento de 15%', function(){

        expect(reserva3.precioFinal()).to.equal(1500);
    })
})




 