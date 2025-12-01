const assert = require("assert");
const { sum } = require("./index");

// simple test
assert.strictEqual(sum(1, 2), 3);

console.log("✅ All tests passed!");
