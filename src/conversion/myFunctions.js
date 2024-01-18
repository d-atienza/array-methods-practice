// Definitions:
// In all of these example functions and their tests, the following definitions should be used:
// "long":  any string which has a length of 7 or more.
// "odd": any number n for which n % 2 !== 0

/** return the first "long" string in the given array, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findFirstLongString(inputStrings) {
    let result = inputStrings.find(checkLengthofString);
    return result;
}

function checkLengthofString(inputString) {
    if (inputString.length >= 7) {
        return inputString;
    }
}

/** return the first odd number in the given array of numbers, or undefined if none is found.
 * @param {number[]} inputNumbers
 * @return {number|undefined}
 */
function findFirstOddNumber(inputNumbers) {
    let result = inputNumbers.find(checkIfNumIsOdd);
    return result;
}   

function checkIfNumIsOdd(inputNum) {
    if (inputNum % 2 !== 0) {
        return inputNum;
    } 
}

/** return the LAST "long" string in the given array of strings, or undefined if none is found.
 * @param {string[]} inputStrings
 * @return {string|undefined}
 */
function findLastLongString(inputStrings) {
    let result = inputStrings.findLast(checkStringLength);
    return result;

}

function checkStringLength(element){
    if (element.length >= 7) {
        return element;
    }
}

/** Given an array of strings of various lengths,
 * return a new array containing only the "long" strings from the input array
 * @param {string[]} inputStrings
 * @returns {string[]}
 * */
function findAllLongStrings(inputStrings) {
    let result = inputStrings.filter(checkLengthofStr);
    return result;
}

function checkLengthofStr(element){
    if (element.length >= 7) {
        return element;
    }
}

/** given an array of numbers, return a new array containing all the odd numbers in the input array.  Returns an empty array if none are found.
 * @param {number[]} inputNumbers
 * @return {number[]}
 */
function findAllOddNumbers(inputNumbers) {
    let result = inputNumbers.filter(checkIfNumOdd)
    return result;

}

function checkIfNumOdd(inputNum) {
    if (inputNum % 2 !== 0) {
        return inputNum;
    } 
}

/** Given an array of mixed types of value
 * return a new array containing only those elements of type string.
 * @param {any[]} inputArray
 * @returns {string[]}
 * */
function findAllTheStrings(inputArray) {
    let result = inputArray.filter(checkTypeofElement);
    return result;

}

function checkTypeofElement(element) {
    if (typeof element == "string" ) {
        return element;
    }
}

/** Given an array of people objects,
 * return a new array containing only those people objects whose firstName OR secondName (or both) is long.
 * @param {{firstName: string, secondName:string}[]} inputObjects
 * @returns {{firstName: string, secondName:string}[]}
 * */
function findAllPeopleWithALongName(inputObjects) {
    let result = inputObjects.filter(checkNameLength);
    return result;
}

//checks if firstName, secondName or both together is >= 7
function checkNameLength(object) {
    if (object.firstName.length >= 7 || object.secondName.length >= 7) {
            return object;
    }
}

/** given an array of numbers return true if all of them are odd, else false.
 * @param {number[]} inputNumbers
 * @return {boolean}
 */
function areAllNumbersOdd(inputNumbers) {
    let result = inputNumbers.every(checkIfAllOdd);
    return result;
}

function checkIfAllOdd(n){
    if (n % 2 !== 0) {
        return n;
    }
}

/** Given an array of strings of various lengths,
 * return true if all of the strings are "long", else false
 * @param {string[]} inputStrings
 * @returns {boolean}
 * */
function areAllStringsLong(inputStrings) {
    let result = inputStrings.every(checkIfStringLong);
    return result;
}

const checkIfStringLong = (str) => {
    if (str.length >= 7) {
        return str;
    }
}


export {
    findFirstLongString,
    findFirstOddNumber,
    findLastLongString,
    findAllLongStrings,
    findAllOddNumbers,
    findAllTheStrings,
    findAllPeopleWithALongName,
    areAllNumbersOdd,
    areAllStringsLong
};
