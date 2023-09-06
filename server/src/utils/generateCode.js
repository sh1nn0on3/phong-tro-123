export const generateCode = (length) => {
  const number = "0123456789";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let code = "";
  for (let i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `${code}${number.charAt(Math.floor(Math.random() * number.length))}`;
};
