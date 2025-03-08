export const Regexes = {
    PERSIAN_CHARACTERS: /^[\u0600-\u06FF\s]+$/,
    PHONE_NUMBER: /^09[0-9]{9}$/,
    NOT_NUMBERS: /[^0-9۰-۹]/g,
    NUMBERS: /^[\d0-9۰-۹]*$/,
    HOME_NUMBER: /^0\d{2,3}\d{7,8}$/,
    SHEBA: /^(ir|IR)?\d$/,
  }