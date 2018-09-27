/*



// FreeCodeCamp INTERMEDIATE ALGORITHM CHALLENGES


*/


// Sum all numbers in a range
function sumAll(arr) {
    arr.sort((x, y) => x > y);
    var num = arr[1];
    var sum = 0;
    while (num > arr[0]) {
        sum += num;
        num--;
    }
    return sum + arr[0];
}
  
// Return an array that has elements from the first and second array that do not appear in the other array
function diffArray(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
}

// Search and destroy - remove values passed as additional parameters from array
function destroyer(arr) {
    for (var i = 0; i < arguments.length; i++) {
        if (arr.includes(arguments[i])) {
            arr = arr.filter(x => x !== arguments[i]);
        }
    }
    return arr;
}

// Wherefore art thou - return array of objects mathing the input key value pair(s)
function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);
    return collection.filter(function (obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

// Spinal case a string
function spinalCase(str) {
    var strSplit = str.split(/[^A-Za-z]/g).join('-').split('');
    for (var i = 1; i < strSplit.length; i++) {
        if (strSplit[i].match(/[A-Z]/) && strSplit[i-1].match(/[A-Za-z]/)) {
            strSplit.splice(i, 0, '-');
            i++;
        }
    }
    return strSplit.join('').toLowerCase();
}

// Translate the provided string to pig latin.
function translatePigLatin(str) {
    if (str[0].match(/[aeiou]/)) {
        return str + 'way';
    } else {
        var firstVowelIndex = 0;
        for (var i = 1; i < str.length; i++) {
            if (str[i].match(/[aeiou]/)) {
                firstVowelIndex = i;
                break;
            }
        }
        return str.substr(firstVowelIndex) + str.substr(0, firstVowelIndex) + 'ay';
    }
}

// Replace word in sring
function myReplace(str, before, after) {
    var strSplit = str.split(' ');
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i] === before) {
            if (before[0] === before[0].toUpperCase()) {
                after = after[0].toUpperCase() + after.substr(1);
            }
            strSplit[i] = after;
            break;
        }
    }
    return strSplit.join(' ');
}

// Pair the DNA strand
function pairElement(str) {
    var dnArray = [];
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'A':
                dnArray.push(["A", "T"])
                break;
            case 'T':
                dnArray.push(["T", "A"])
                break;
            case 'G':
                dnArray.push(["G", "C"])
                break;
            default:
                dnArray.push(["C", "G"])
        }
    }
    return dnArray;
}

// Find the missing letters in the range
function fearNotLetter(str) {
    for(var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }  
    }
    return undefined;
}

// Sorted union
function uniteUnique(arr) {
    return arr;
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].


*/