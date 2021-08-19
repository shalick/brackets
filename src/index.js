module.exports = function check(str, bracketsConfig) {
  const BRACKETS_PAIRS = bracketsConfig.reduce((prev, curr) => {
    prev[curr[0]] = curr[1];
    return prev;
  }, {});
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    if (currentSymbol === BRACKETS_PAIRS[topElement]) {
      stack.pop();
    } else if (BRACKETS_PAIRS[currentSymbol]) {
      stack.push(currentSymbol);
    } else {
      return false;
    }
  }
  return !stack.length;
}
