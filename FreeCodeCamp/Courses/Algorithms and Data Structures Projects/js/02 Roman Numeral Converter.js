// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
    let arabic = num;
let roman = '';
   
const arabicArray = [5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const romanArray = ['V&#773;', 'MV&#773;','M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

 
if (/^(0|[1-9]\d*)$/.test(arabic)) {
 if (arabic == 0) {  
   outputField.innerHTML = 'Nulla'
 } else if (arabic != 0) {
  for (let i = 0; i < arabicArray.length; i++) {
   while (arabicArray[i] <= arabic) {
     roman += romanArray[i]
     arabic -= arabicArray[i]
   }
}
  return roman;
 }
} else {
  return "error";
}

}


convertToRoman(36);