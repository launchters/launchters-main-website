const passwordGenerator = (
  length = 14,
  acceptedChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_!@-#$"
) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => acceptedChars[x % acceptedChars.length])
    .join("");

export default passwordGenerator;
