/**
 * Utilerias para la subida de videos (Inspeccion y Embalar) al endpoint nombreArchivo.
 * El backend responde errores con HTTP 403 y {status_code, message}, por eso no se debe
 * usar error.json().error: se perdia el mensaje y la pantalla quedaba sin aviso.
 */

export const TIMEOUT_MINIMO_SUBIDA_MS = 60 * 1000;
// Velocidad minima de subida que se tolera antes de cortar por tiempo (256 KB/s)
const BYTES_POR_SEGUNDO_MINIMO = 256 * 1024;

/** Tiempo maximo de espera para subir un video segun su tamaño en base64. */
export function timeoutSubidaVideo(base64: string): number {
  const longitud = base64 ? base64.length : 0;
  return TIMEOUT_MINIMO_SUBIDA_MS + Math.ceil(longitud / BYTES_POR_SEGUNDO_MINIMO) * 1000;
}

/** Regresa el folio del video si la respuesta trae uno valido, si no regresa null. */
export function folioVideoDeRespuesta(data: any): string {
  const folio = data ? data.current : null;
  if (typeof folio !== 'string') {
    return null;
  }
  const limpio = folio.trim();
  const minusculas = limpio.toLowerCase();
  return limpio && minusculas !== 'error' && minusculas !== 'null' && minusculas !== 'undefined' ? limpio : null;
}

/** Convierte cualquier error de la subida en un mensaje para el usuario, incluyendo el codigo HTTP. */
export function mensajeErrorSubidaVideo(error: any): string {
  if (!error) {
    return 'Ocurrió un error desconocido al enviar el video.';
  }
  if (error.name === 'TimeoutError') {
    return 'El servidor tardó demasiado en responder al guardar el video (tiempo de espera agotado).';
  }
  if (typeof error.status === 'number' && typeof error.json === 'function') {
    return mensajePorEstado(error.status, detalleRespuesta(error));
  }
  if (error.mensaje) {
    return error.mensaje;
  }
  if (error.name === 'SyntaxError') {
    return 'El servidor respondió con un formato no válido al guardar el video.';
  }
  if (typeof error === 'string') {
    return error;
  }
  return error.message ? 'Error al enviar el video: ' + error.message : 'Ocurrió un error desconocido al enviar el video.';
}

function mensajePorEstado(status: number, detalle: string): string {
  if (status === 0) {
    return 'No hay conexión con el servidor. Verifica la red e intenta de nuevo.';
  }
  let mensaje: string;
  if (status === 400) {
    mensaje = 'El servidor rechazó la solicitud del video';
  } else if (status === 401) {
    mensaje = 'La sesión expiró, vuelve a iniciar sesión';
  } else if (status === 403) {
    mensaje = 'El servidor no pudo guardar el video';
  } else if (status === 404) {
    mensaje = 'No se encontró el servicio para guardar el video';
  } else if (status === 408 || status === 504) {
    mensaje = 'El servidor tardó demasiado en responder';
  } else if (status === 413) {
    mensaje = 'El video es demasiado grande para el servidor';
  } else if (status >= 500) {
    mensaje = 'Error interno del servidor al guardar el video';
  } else {
    mensaje = 'El servidor respondió con un error al guardar el video';
  }
  return mensaje + ' (HTTP ' + status + ')' + (detalle ? ': ' + detalle : '.');
}

function detalleRespuesta(respuesta: any): string {
  try {
    const cuerpo = respuesta.json();
    if (cuerpo) {
      return cuerpo.message || cuerpo.mensaje || cuerpo.error || '';
    }
  } catch (e) {
    // El cuerpo no es JSON (pagina HTML de error del servidor, etc.)
    try {
      const texto = (respuesta.text() || '').trim();
      if (texto && texto.length <= 200 && texto.charAt(0) !== '<') {
        return texto;
      }
    } catch (ignorado) {
    }
  }
  return '';
}
