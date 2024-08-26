type TypeWithKey<T> = { [key: string]: T };

const codeMatcher: TypeWithKey<string> = {
  ERR_NETWORK: "Se rompió la red",
  ERR_TIMEOUT: "Se acabó el tiempo",
  ERR_CANCEL: "Se canceló la petición",
  ERR_UNKNOWN: "Error desconocido",
  ERR_400: "Error 400",
  ERR_401: "Error 401",
  ERR_403: "Error 403",
};

export const customAxiosError = (code: string): string => {
  return codeMatcher[code] || codeMatcher.ERR_UNKNOWN;
};
