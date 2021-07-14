const balancedBrackets = require("./program");

test("All () brackets opened and closed", () => {
  expect(balancedBrackets("((()))")).toBe(true);
});
test("All [] brackets opened and closed", () => {
  expect(balancedBrackets("[[[]]]")).toBe(true);
});
test("All {} brackets opened and closed", () => {
  expect(balancedBrackets("{{{}}}")).toBe(true);
});
test("All ([]) brackets opened and closed", () => {
  expect(balancedBrackets("([()])")).toBe(true);
});
test("All ({}) brackets opened and closed", () => {
  expect(balancedBrackets("({()})")).toBe(true);
});
test("All [{}] brackets opened and closed", () => {
  expect(balancedBrackets("[{[]}]")).toBe(true);
});
test("All ([{}]) brackets opened and closed", () => {
  expect(balancedBrackets("([{}])")).toBe(true);
});
test("One () not closed", () => {
  expect(balancedBrackets("((())")).toBe(false);
});
test("One () not opened", () => {
  expect(balancedBrackets("(()))")).toBe(false);
});
test("One [] not closed", () => {
  expect(balancedBrackets("[[[]]")).toBe(false);
});
test("One [] not opened", () => {
  expect(balancedBrackets("[[]]]")).toBe(false);
});
test("One {} not closed", () => {
  expect(balancedBrackets("{{{}}")).toBe(false);
});
test("One {} not opened", () => {
  expect(balancedBrackets("{{}}}")).toBe(false);
});
test("Bracket missmatch", () => {
  expect(balancedBrackets("([{})]")).toBe(false);
});
