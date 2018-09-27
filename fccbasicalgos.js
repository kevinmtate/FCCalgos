/*



// FreeCodeCamp BASIC ALGORITHM CHALLENGES



*/

// Convert Celsius to Fahrenheit
function convertToF(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Factorialize a number
function factorialize(num) {
    return num === 0 ? 1 : num *= factorialize(num - 1);
}

// Find the longest word in a string
function findLongestWordLength(str) {
    return str.split(' ').reduce(function(longest, current) {
        return current.length > longest.length ? current : longest;
    }).length;
}

// Find largest number in an array
function largestOfFour(arr) {
    return arr.map(arrayInArr => arrayInArr.reduce(function(largest, current) {
        return current > largest ? largest : current;
    }));
}

// Confirm the ending - check if string ends with given target string
function confirmEnding(str, target) {
    return str.substr(str.length - target.length) === target;
}

// Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

// Truncate a string
function truncateString(str, num) {
    return num < str.length ? str.substr(0, num) + '...' : str;
}

// Finders keepers - return first element in array that passes test
function findElement(arr, func) {
    return arr.filter(func)[0];
}

// Boo Who - check if value is classified as boolean primitive
function booWho(bool) {
    return (bool === true || bool === false);
}

// Title case a sentance
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(string) {
        return string = string.split('')[0].toUpperCase() + string.substr(1);
    }).join(' ');
}

// Splice and Slice - copy each element of first array into second array
function frankenSplice(arr1, arr2, n) {
    var arr3 = arr2.slice();
    for (var i = arr1.length - 1; i >= 0; i--) {
        arr3.splice(n, 0, arr1[i]);
    }
    return arr3;
}

// Falsy Bouncer - remove falsy values from array
function bouncer(arr) {
    return arr.filter(value => !!value);
}

// Where do I belong - insert num into sorted array at lowest index
function getIndexToIns(arr, num) {
    arr.sort((x, y) => x > y);
    var index = 0;
    while (num > arr[index]) {
        index++;
    }
    return index;
}

// Mutation - return true if first string contains all elements in second string
function mutation(arr) {
    return arr[1].toLowerCase().split('').every(x => arr[0].toLowerCase().split('').includes(x))
}

// Chunky Munky - create a two demensional array with arrays the size of the second parameter
function chunkArrayInGroups(arr, size) {
    var newArr = [];
    for (var i = 0; i < arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
    }
    return newArr;
}