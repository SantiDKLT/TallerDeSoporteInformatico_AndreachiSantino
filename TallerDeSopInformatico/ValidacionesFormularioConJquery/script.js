function validarFormulario() {
    // Obtenemos los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Verificación simple del correo electrónico
    if (!validarEmail(email)){
      alert("Por favor, ingrese un correo electrónico válido.").css("background-color","red");
      return;
    }

    // Verificación de la longitud del mensaje
    if (mensaje.length < 10) {
      alert("El mensaje debe tener al menos 10 caracteres.").css("background-color","red");
      return;
    }

    // Puedes agregar más verificaciones aquí para otros campos

    // Si todas las verificaciones pasan, puedes enviar el formulario
    document.getElementById("myForm").submit();
  }

  function validarEmail(email) {
    // Verificación simple de correo electrónico
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }