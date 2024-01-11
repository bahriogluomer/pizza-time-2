export function validateName(value) {
    return value.replaceAll(" ", "").length >= 4;
  }

