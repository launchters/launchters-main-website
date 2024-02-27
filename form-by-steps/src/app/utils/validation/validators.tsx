// Spanish DNI or NIE Reg Exp
export const personalIDRegExp = /^([0-9]{8}[A-Z])|[XYZ][0-9]{7}[A-Z]$|^.{0}$/gi; // Allows empty strings
export const postCodeRegExp = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$|^.{0}$/g; // Allows empty strings
export const phoneNumberRegExp =
  // Option 1: /^(?:(?:\+|00)34[ -]?)?[679]\d{8}$|^(?:(?:\+|00)34[ -]?)?[89]\d{7}$/g; // Incluye: Fijos y moviles españoles.
  // Option 2: /^\d{7,13}$/g; // Numeros solo. Entre 7-13 digitos.
  /^(\d{7,13})$|^.{0}$/g; // Allows for empty strings

export const formErrors = {
  tooShort: "¡Demasiado corto!",
  tooLong: "¡Demasiado largo!",
  required: "¡Campo obligatorio!",
  invalid: (name: string = "campo") =>
    `¡El campo '${name.toLowerCase()}' debe ser válido!`,
};
