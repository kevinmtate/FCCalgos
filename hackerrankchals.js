/*



// HackerRank Challenges



*/

// Sock Merchant
function sockMerchant(n, ar) {
    let pairs = 0;

    for (let i = 0; i < ar.length; i++) {
        for (let j = i+1; j < ar.length; j++) {
            if (ar[i] === ar[j]) {
                pairs++;
                ar.splice(j, 1);
                break;
            }
        }
    }
    return pairs;
}

// Left Rotation of an Array
function rotLeft(a, d) {
    // trying to use recursion -----
    // console.log(a, d);
    // let newArray = [];

    // if (d > 0) {
    //     for (let i = 1; i < a.length; i++) {
    //         newArray.push(a[i]);
    //     }
    //     newArray.push(a[0]);
    //     rotLeft(newArray, d - 1);
    // }

    // working solution -----
    for (let i = d; i > 0; i--) {
        let newArray = [];
        for (let j = 1; j < a.length; j++) {
            newArray.push(a[j]);
        }
        newArray.push(a[0]);
        a = newArray;
    }
    return a;
}
