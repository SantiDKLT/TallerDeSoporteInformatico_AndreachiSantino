function activarMiCarousel(idCarrusel, intervalo) {
    var carousel = $('#' + idCarrusel);
    var imagen = carousel.find('img');
    var actual = 0;
 
    function showNextImage() {
        imagen.eq(actual).fadeOut(1000, function () {
            // Llama devuelta la funcion después de que se complete el fadeout
            if (actual + 1 < imagen.length) {
                actual = actual + 1;
            } else {
                actual = 0;
            }
            imagen.eq(actual).fadeIn(1000);
        });
    }
 
    setInterval(showNextImage, intervalo);
}