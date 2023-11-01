import {EMPTY, SPACE} from "../utils/Constants";

const POLYBIUS_SQUARE = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'K'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z'],
];

export default class EncryptionService {

    encrypt(text) {
        const cleanedText = this.cleanText(text);
        let encryptedText = EMPTY;

        for (let i = 0; i < cleanedText.length; i++) {
            const char = cleanedText[i];
            if (char === SPACE) {
                encryptedText += SPACE;
            } else {
                for (let row = 0; row < POLYBIUS_SQUARE.length; row++) {
                    for (let col = 0; col < POLYBIUS_SQUARE[row].length; col++) {
                        if (POLYBIUS_SQUARE[row][col] === char) {
                            encryptedText += `${row + 1}${col + 1} `;
                        }
                    }
                }
            }
        }

        return encryptedText.trim();
    }

    cleanText(text) {
        return text.toUpperCase().replace(/J/g, 'I');
    }

    decrypt(text) {
        return text
            .split(SPACE)
            .map(pair => {
                if (pair === EMPTY) {
                    return SPACE;
                } else {
                    const row = parseInt(pair[0]) - 1;
                    const col = parseInt(pair[1]) - 1;
                    return POLYBIUS_SQUARE[row][col];
                }
            })
            .join(EMPTY);
    }

}
