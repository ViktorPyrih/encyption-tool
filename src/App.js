import React, { useState } from 'react';
import EncryptionService from "./services/EncryptionService";
import {EMPTY} from "./utils/Constants";

const encryptionService = new EncryptionService();

function App() {
    const [inputText, setInputText] = useState(EMPTY);
    const [outputText, setOutputText] = useState(EMPTY);

    const encryptText = () => {
        setOutputText(encryptionService.encrypt(inputText));
    }

    const decryptText = () => {
        setOutputText(encryptionService.decrypt(inputText));
    }

    return (
        <div className="container">
            <h1>Encryption/Decryption Tool</h1>
            <label htmlFor="input">Enter Text:</label>
            <textarea
                id="input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your text here"
            ></textarea>
            <button onClick={encryptText}>Encrypt</button>
            <button onClick={decryptText}>Decrypt</button>
            <label htmlFor="output">Result:</label>
            <textarea id="output" value={outputText} readOnly/>
        </div>
    );
}

export default App;
