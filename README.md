# 🔐 Encryptifier

**Encryptifier** is a lightweight Node.js package that provides easy-to-use encryption and decryption functions for text using standard algorithms like **AES** and **DES** — powered by [crypto-js](https://www.npmjs.com/package/crypto-js).

---

## ✨ Features

- 🔒 AES and DES encryption algorithms
- 🧠 Simple API for beginners
- ⚙️ Built on top of battle-tested `crypto-js`
- 📦 Lightweight and dependency-friendly

---

## 📦 Installation

```bash
npm install encryptifier

---

##  Usage


const { encrypt, decrypt } = require("encryptifier");

// Encrypt a message
const encrypted = encrypt("Hello World", "aes", "my-secret-key");
console.log("Encrypted:", encrypted);

// Decrypt it back
const decrypted = decrypt(encrypted, "aes", "my-secret-key");
console.log("Decrypted:", decrypted);


---
## Example

const { encrypt, decrypt } = require("encryptifier");

const secretMessage = "Encrypt me, please!";
const key = "myPassword";

// AES encryption
const aesEncrypted = encrypt(secretMessage, "aes", key);
console.log("AES Encrypted:", aesEncrypted);
console.log("AES Decrypted:", decrypt(aesEncrypted, "aes", key));

// DES encryption
const desEncrypted = encrypt(secretMessage, "des", key);
console.log("DES Encrypted:", desEncrypted);
console.log("DES Decrypted:", decrypt(desEncrypted, "des", key));
