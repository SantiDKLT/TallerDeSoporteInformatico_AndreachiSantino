  function validarFormulario() {
    // Obtenemos los valores de los campos
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var mensaje = $("#mensaje");
    var edad = $("#edad")
    // Verificación simple del correo electrónico
    if (!validarEmail(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Verificación de la longitud del mensaje
    if (mensaje.val().length < 10) {
      mensaje.css("background-color", "red");
      alert("El mensaje debe tener al menos 10 caracteres.");
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
