// refrescar la pagina
export const refreshPage = () => {
  window.location.reload();
};

// validar que solo hayan letras/cadena de string
export const lettersOnly = (value) =>
  /^(?=s*[a-zA-Z])([a-zA-Z0-9\s]+)$/.test(value);
