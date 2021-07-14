const balancedBrackets = (text) => {
  let stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];
  for (let char of text) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    }

    if (
      closingBrackets.includes(char) &&
      (stack.length === 0 ||
        stack[stack.length - 1] !==
          openingBrackets[closingBrackets.indexOf(char)])
    ) {
      return false;
    } else if (closingBrackets.includes(char)) {
      stack.pop();
    }
  }

  return !stack.length;
};
module.exports = balancedBrackets;
