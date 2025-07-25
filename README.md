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
```

---

## 🚀 Usage

### Basic Usage

```javascript
const { encrypt, decrypt } = require("encryptifier");

// Encrypt a message
const encrypted = encrypt("Hello World", "aes", "my-secret-key");
console.log("Encrypted:", encrypted);

// Decrypt it back
const decrypted = decrypt(encrypted, "aes", "my-secret-key");
console.log("Decrypted:", decrypted);
```

---

## 📝 API Reference

### `encrypt(text, algorithm, key)`

Encrypts the given text using the specified algorithm and key.

**Parameters:**
- `text` (string): The text to encrypt
- `algorithm` (string): The encryption algorithm (`"aes"` or `"des"`)
- `key` (string): The encryption key

**Returns:** Encrypted string

### `decrypt(encryptedText, algorithm, key)`

Decrypts the given encrypted text using the specified algorithm and key.

**Parameters:**
- `encryptedText` (string): The encrypted text to decrypt
- `algorithm` (string): The decryption algorithm (`"aes"` or `"des"`)
- `key` (string): The decryption key (must match the encryption key)

**Returns:** Decrypted string

---

## 📋 Examples

### Complete Example

```javascript
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
```

### Error Handling

```javascript
const { encrypt, decrypt } = require("encryptifier");

try {
    const encrypted = encrypt("Hello World", "aes", "my-key");
    const decrypted = decrypt(encrypted, "aes", "my-key");
    console.log("Success:", decrypted);
} catch (error) {
    console.error("Encryption/Decryption failed:", error.message);
}
```

---

## 🔑 Supported Algorithms

| Algorithm | Description |
|-----------|-------------|
| `aes` | Advanced Encryption Standard (recommended) |
| `des` | Data Encryption Standard |

---

## ⚠️ Security Notes

- Always use strong, unique keys for encryption
- AES is recommended over DES for better security
- Keep your encryption keys secure and never commit them to version control
- Consider using environment variables for sensitive keys

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Dependencies

- [crypto-js](https://www.npmjs.com/package/crypto-js) - JavaScript library of crypto standards

---

## 📧 Support

If you have any questions or need help, please open an issue on the GitHub repository.

---

**Made with ❤️ by Suyash Singh for the Node.js community**