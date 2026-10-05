const test = require("node:test");
const assert = require("node:assert/strict");

function greet(name) {
  return `Hello, ${name}!`;
}

test("greet returns the expected greeting", () => {
  assert.equal(greet("World"), "Hello, World!");
});
