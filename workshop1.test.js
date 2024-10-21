const { tsMethodSignature } = require("@babel/types");
const { describe } = require("yargs");

const multiplication = (a, b) => {
    return a * b;
}

const concatOdds = (mixedArray1, mixedArray2) => {
    let combinedArray = [...new Set([...mixedArray1,...mixedArray2])]; //odds only from both arrays
    const oddsOnlyArray = [];
    for (let i=0; i<combinedArray.length; i++){
        if(combinedArray[i] %2 !==0){
            oddsOnlyArray.push(combinedArray[i])
        }
    }

    return oddsOnlyArray
}

// Unit Tests for Multiplication Function:
// - Expect multiplication(2, 3) to be 6
// - Expect multiplication(-2, 3) to be -6
// - Expect multiplication(0, 5) to be 0
// - Expect multiplication('a', 3) to be an error

// Unit Tests for concatOdds Function:
// - Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be [-1, 1, 3, 9, 15]
// - Expect concatOdds([], [1, 2, 3]) to be [1, 3]
// - Expect concatOdds([2, 4], [6, 8]) to be []
// - Expect concatOdds([1, 1, 3], [1, 1]) to be [1, 3]

// Functional Tests for Shopping Cart Checkout Feature:
// - When a user tries to check out as a guest without any items in the cart, they should see an error message.
// - When a user checks out as a logged-in user, they should be taken to the confirmation page.
// - When a user checks out as a guest, they should be prompted to create an account after checkout.
// - When a user clicks "Checkout" and the cart is empty, they should see a message saying the cart is empty.
