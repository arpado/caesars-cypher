export default function encodingMethod(letter, i) {
       
        //forgatas 0-25
        //A-Z 65-90
        //a-z 97-122
        let newChar = '';
        let letterValue = letter.charCodeAt();
        if(letterValue > 64 && letterValue < 91) {
            if ((letterValue + i) > 90) {
                let res = i - (91 - letterValue);
                newChar = String.fromCharCode(res + 65);
            } else {
                newChar = String.fromCharCode(i + letterValue);
            }
        } else if (letterValue > 96 && letterValue < 123) {
            if ((letterValue + i) > 122) {
                let res = i - (123 - letterValue);
                newChar = String.fromCharCode(res + 97);
            } else {
                newChar = String.fromCharCode(i + letterValue);
            }
        } else {
            newChar = letter;
        }
        console.log(newChar)
        return newChar;
}

// module.exports = {
//     newChar
// }