export const REGULAR_EXPRESSIONS = {
  whiteSpace: /\s/,
  // ! For emails We make use of validator/lib/isEmail
};

export const hasWhiteSpace = (str: string) =>
  REGULAR_EXPRESSIONS.whiteSpace.test(str);
