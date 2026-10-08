const { add } = require("./script");

if (add(2, 3) !== 5) {
    throw new Error("Test Failed");
}

console.log("All tests passed!");