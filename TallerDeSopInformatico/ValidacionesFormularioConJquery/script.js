  function validarFormulario() {
    // Obtenemos los valores de los campos
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var mensaje = $("#mensaje").val();

    // Verificación simple del correo electrónico
    if (!validarEmail(email)) {
      mostrarError("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Verificación de la longitud del mensaje
    if (mensaje.length < 10) {
      mostrarError("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    // Si todas las verificaciones pasan, puedes enviar el formulario
    $("#myForm").submit();
  }

  function validarEmail(email) {
    // Verificación simple de correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function mostrarError(mensaje) {
    // Muestra un mensaje de error
    $("#errorMensaje").text(mensaje);
    $("#errorAlert").show();
  }
