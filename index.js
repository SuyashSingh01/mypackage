
const CryptoJS = require("crypto-js");

function encrypt(text, algorithm = "aes", key = "default") {
  if (algorithm === "aes") {
    return CryptoJS.AES.encrypt(text, key).toString();
  } else if (algorithm === "des") {
    return CryptoJS.DES.encrypt(text, key).toString();
  } else {
    throw new Error("Unsupported algorithm. Use 'aes' or 'des'.");
  }
}

function decrypt(cipherText, algorithm = "aes", key = "default") {
  if (algorithm === "aes") {
    const bytes = CryptoJS.AES.decrypt(cipherText, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  } else if (algorithm === "des") {
    const bytes = CryptoJS.DES.decrypt(cipherText, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  } else {
    throw new Error("Unsupported algorithm. Use 'aes' or 'des'.");
  }
}

module.exports = { encrypt, decrypt };
