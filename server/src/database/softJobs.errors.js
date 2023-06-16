export const handleErrors = (code, message = "Error desconocido") => {
  if (!code) {
    return {
      status: 500,
      message: `Error de servidor: ${message}`,
    };
  }
  switch (code) {
    case "22P02":
      return {
        status: 400,
        message: message,
      };

    case "42703":
      return {
        status: 400,
        message: message,
      };
    case "2201W":
      return {
        status: 400,
        message: message,
      };

    case "2201X":
      return {
        status: 400,
        message: message,
      };

    case "42601":
      return {
        status: 400,
        message: message,
      };
    case "42P01":
      return {
        status: 404,
        message: message,
      };
    case "400":
      return {
        status: 400,
        message: "Se requieren email y contraseña.",
      };
    case "401":
      return {
        status: 401,
        message: "Clave incorrecta",
      };
    case "402":
      return {
        status: 400,
        message: "Se necesita el token bearer",
      };
    case "403":
      return {
        status: 400,
        message:
          "Se necesitan todos los campos: Email, Password, rol y lenguaje",
      };
    case "404":
      return {
        status: 404,
        message: "Usuario no existe",
      };
    case "409":
      return {
        status: 409,
        message: "Email existente. Intente logear",
      };
  }
};
