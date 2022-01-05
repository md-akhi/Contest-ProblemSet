// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) { 
        const regex = /\W/g;
        const deciphered = str.split('').map(val => {
            const currChar = val.charCodeAt();
            if (regex.test(val)) {
                return currChar;
            } else if (currChar <= 77) {
                return currChar + 13;
            } else if (currChar >= 78) {
                return currChar - 13;
            }          
        
        });

        return String.fromCharCode(...deciphered); 
    }

    rot13("SERR PBQR PNZC");