
document.addEventListener('DOMContentLoaded', function () {
  function toggleDropdowns() {
    const services = ['paseo', 'hospedaje', 'guarderia', 'baño'];

    services.forEach(service => {
      const yesRadio = document.querySelector(`input[name="${service}"][value="Si"]`);
      const noRadio = document.querySelector(`input[name="${service}"][value="No"]`);
      const dropdown = document.querySelector(`.div-${service} .dropdown select`);

      // Habilitar el dropdown si "Sí" está seleccionado, deshabilitar si "No" está seleccionado o si no se ha seleccionado nada
      if (yesRadio && yesRadio.checked) {
        if (dropdown) dropdown.disabled = false; // Habilita el dropdown
      } else if (noRadio && noRadio.checked) {
        if (dropdown) dropdown.disabled = true; // Deshabilita el dropdown
      } else {
        if (dropdown) dropdown.disabled = true; // Deshabilita el dropdown si no hay selección
      }
    });
  }

  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => {
    radio.addEventListener('change', toggleDropdowns);
  });

  toggleDropdowns();

  const idServicio = document.querySelector('#servicesForm');
  if (!idServicio) {
    console.error('Formulario no encontrado');
    return;
  }

  idServicio.addEventListener('submit', function (event) {
    event.preventDefault();

    const servicios = {
      paseo: idServicio.querySelector('input[name="paseo"]:checked')?.value || 'No',
      paseoTarifa: getSelectValue('paseo'),
      hospedaje: idServicio.querySelector('input[name="hospedaje"]:checked')?.value || 'No',
      hospedajeTarifa: getSelectValue('hospedaje'),
      guarderia: idServicio.querySelector('input[name="guarderia"]:checked')?.value || 'No',
      guarderiaTarifa: getSelectValue('guarderia'),
      baño: idServicio.querySelector('input[name="baño"]:checked')?.value || 'No',
      bañoTarifa: getSelectValue('baño')
    };

    // Validar que cada servicio tenga una opción seleccionada
    const services = ['paseo', 'hospedaje', 'guarderia', 'baño'];
    let allServicesSelected = true;

    services.forEach(service => {
      const selectedRadio = idServicio.querySelector(`input[name="${service}"]:checked`);

      if (!selectedRadio) {
        allServicesSelected = false;
      }
    });

    if (!allServicesSelected) {
      alert('Por favor, seleccione una opción para cada servicio.');
      return;
    }

    // Convertir a JSON
    const jsonData = JSON.stringify(servicios);
    console.log('Datos enviados a la API:', jsonData);

    // Guardar en localStorage
    localStorage.setItem('serviciosForm', jsonData);

   /*
    // Enviar por API
    fetch('http://3.133.102.220:8081/api/safedog/servicios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
      mode: 'cors',
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => {
          throw new Error(`Error ${response.status}: ${text}`);
        });
      }
      return response.json(); 
    }) 
    .then(data => { */
      console.log('Guardado', jsonData);
      // Mostrar alert al usuario de que se guardó la información
      alert('Su información ha sido enviada con éxito y será revisada por el equipo de SafeDog. Recibirá una respuesta en las próximas 72 horas. Agradecemos su preferencia y confianza.');
      // Redirigir a otra página después del alert
      window.location.href = '../inicio.html';
      /*
    })
    .catch(error => {
      console.error('Error al guardar:', error);
    }); */
  });

  function getSelectValue(service) {
    const dropdown = document.querySelector(`.div-${service} .dropdown select`);
    // Retorna el valor del dropdown si está habilitado, o '0' si está deshabilitado
    return (dropdown && !dropdown.disabled) ? dropdown.value : '0';
  }
});