
function actualizarContador() {
    // Obtén la fecha actual
    const ahora = new Date();

    // Fecha objetivo (puedes personalizarla)
    const fechaObjetivo = new Date("2024-10-30T23:59:59");

    // Calcula la diferencia entre las fechas
    const diferencia = fechaObjetivo - ahora;

    // Calcula días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60) / 1000));

    // Actualiza el contenido del elemento HTML con el contador
    document.getElementById("contador").innerHTML = `
      <p>${dias} D</p>
      <p>${horas} H</p>
      <p>${minutos} M</p>
      <p>${segundos} S</p>
    `;
  }
  // Actualiza el contador cada segundo
  setInterval(actualizarContador, 1000);
