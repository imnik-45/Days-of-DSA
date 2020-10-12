function reverseString(str) {

    let arrayStrings = str.split("");
  
    let reverseArray = arrayStrings.reverse();

    let joinArray = reverseArray.join("");
  
    return joinArray;
}
let string = prompt('Enter a string: ');
let result = reverseString(string);

console.log(result);
