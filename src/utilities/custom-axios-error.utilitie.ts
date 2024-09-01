type TypeWithKey<T> = { [key: string]: T };

/**
 * Objeto con los códigos de error personalizados y sus respectivos mensajes
 */
const codeMatcher: TypeWithKey<string> = {
  ERR_CANCEL: "La solicitud ha sido cancelada por el usuario o el sistema.",
  ERR_NETWORK: "Error de red, por favor verifica tu conexión a Internet.",
  ERR_TIMEOUT:
    "El tiempo de espera para la solicitud ha expirado. Intenta nuevamente.",
  ERR_GATEWAY_TIMEOUT:
    "El servidor no respondió a tiempo. Por favor, intenta nuevamente.",
  ERR_BAD_RESPONSE: "La respuesta del servidor fue inválida o inesperada.",
  ERR_BAD_REQUEST: "Solicitud incorrecta. Verifica los datos enviados.",
  ERR_UNAUTHORIZED: "No tienes autorización para realizar esta acción.",
  ERR_FORBIDDEN: "Acceso denegado. No tienes permisos suficientes.",
  ERR_INTERNAL_SERVER: "Error interno en el servidor. Inténtalo más tarde.",
  ERR_SERVICE_UNAVAILABLE: "El servicio no está disponible en este momento.",
  ERR_NOT_FOUND: "El recurso solicitado no fue encontrado.",
  ERR_UNKNOWN: "Ocurrió un error desconocido. Por favor, intenta nuevamente.",
};

/**
 * Función para obtener el mensaje de error personalizado de un código de error
 * @param code Código de error
 * @returns Mensaje de error personalizado
 */
export const customAxiosError = (code: string): string => {
  return codeMatcher[code] || codeMatcher.ERR_UNKNOWN;
};