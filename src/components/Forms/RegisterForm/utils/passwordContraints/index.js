import { CheckmarkOutline20, CloseOutline20 } from "@carbon/icons-react";

export const hasLowerCase = str => /[a-z]/.test(str);
export const hasUpperCase = str => /[A-Z]/.test(str);
export const hasNumber = str => /.*[0-9].*/.test(str);
export const hasLengthBetween8and32 = str =>
  str.length >= 8 && str.length <= 32;
export const hasSpecialCharacters = str => {
  if (str.length === 0) return undefined;
  return /^[^`\\;:{"?)<>\s]*$/.test(str);
};

/**
 * Build out password tooltip details,
 * including classes and status icons.
 */
export const buildPasswordConstraints = password => {
  const passwordConstraints = [
    {
      id: 1,
      constraint: hasLengthBetween8and32,
      text: "8-31 characters",
      className: {
        success: "hasLength--success",
        error: "hasLength--error"
      },
      successIcon: CheckmarkOutline20,
      errorIcon: CheckmarkOutline20
    },
    {
      id: 2,
      constraint: hasUpperCase,
      text: "One uppercase character",
      className: {
        success: "hasUpperCase--success",
        error: "hasUpperCase--error"
      },
      successIcon: CheckmarkOutline20,
      errorIcon: CheckmarkOutline20
    },
    {
      id: 3,
      constraint: hasLowerCase,
      text: "One lowercase character",
      className: {
        success: "hasLowerCase--success",
        error: "hasLowerCase--error"
      },
      successIcon: CheckmarkOutline20,
      errorIcon: CheckmarkOutline20
    },
    {
      id: 4,
      constraint: hasNumber,
      text: "One number",
      className: {
        success: "hasNumber--success",
        error: "hasNumber--error"
      },
      successIcon: CheckmarkOutline20,
      errorIcon: CheckmarkOutline20
    },

    {
      id: 5,
      constraint: hasSpecialCharacters,
      text: 'Cannot contain space or `\\;:{"?)<>',
      className: {
        success: "hasSpecialCharacters--success",
        error: "hasSpecialCharacters--error"
      },
      successIcon: CheckmarkOutline20,
      errorIcon: CloseOutline20
    }
  ].map(({ id, constraint, text, className, successIcon, errorIcon }) => {
    return {
      id,
      constraint: constraint(password),
      text,
      className,
      successIcon,
      errorIcon
    };
  });

  return passwordConstraints;
};
