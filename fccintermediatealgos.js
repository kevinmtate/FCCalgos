/*



// FreeCodeCamp INTERMEDIATE ALGORITHM CHALLENGES


*/


// SUM ALL NUMBERS IN A RANGE
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
  
// RETURN AN ARRAY THAT HAS ELEMENTS FROM THE FIRST AND SECOND ARRAY THAT DO NOT APPEAR IN THE OTHER ARRAY
function diffArray(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
}

// SEARCH AND DESTROY - REMOVE VALUES PASSED AS ADDITIONAL PARAMETERS FROM ARRAY
function destroyer(arr) {
    for (var i = 0; i < arguments.length; i++) {
        if (arr.includes(arguments[i])) {
            arr = arr.filter(x => x !== arguments[i]);
        }
    }
    return arr;
}

// WHEREFORE ART THOU - RETURN ARRAY OF OBJECTS MATCHING THE INPUT KEY VALUE PAIR(S)
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

// SPINAL CASE A STRING
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

// TRANSLATE THE PROVIDED STRING TO PIGLATIN
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

// REPLACE WORD IN STRING
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

// PAIR THE DNA STRAND
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

// FIND THE MISSING LETTERS IN THE RANGE
function fearNotLetter(str) {
    for(var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code !== str.charCodeAt(0) + i) {
            return String.fromCharCode(code - 1);
        }  
    }
    return undefined;
}

// SORTED UNION
function uniteUnique(arr) {
    return arr;
}
  
//  STEAMROLL ARRAY 
function steamrollArray(arr) {
    let newArray = func(arr);
    while (!newArray.every(elem => !Array.isArray(elem))) {
        newArray = func(newArray);
    }
    return newArray;
}
  
function func(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                newArray.push(arr[i][j]);
            }
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
//  STEAMROLL ARRAY

// EVERYTHING BE TRUE
function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre]);
}

// ARGUMENTS OPTIONAL
function addTogether() {
    var args = arguments;
    if (args.length === 2) {
        if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
            return undefined;
        } else {
            return args[0] + args[1];
        }
    } else {
        if (typeof args[0] !== 'number') {
            return undefined;
        } else {
            return function(num) {
                if (typeof arguments[0] !== 'number') {
                    return undefined;
                } else {
                    return args[0] + num; 
                }
            };
        }
    }
}

// MAKE A PERSON
var Person = function(firstAndLast) {
    var name = firstAndLast.split(' ');

    this.getFullName = function() {
        return name.join(' ');
    };

    this.getFirstName = function() {
        return name[0];
    };

    this.getLastName = function() {
        return name[1];
    };

    this.setFirstName = function(first) {
        name[0] = first;
    };

    this.setLastName = function(last) {
        name[1] = last;
    };

    this.setFullName = function(firstAndLast) {
        name = firstAndLast.split(' ');
    };
};
