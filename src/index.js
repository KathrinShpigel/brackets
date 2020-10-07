module.exports = function check(str, bracketsConfig) {
  const brackets = str.split("");
  const config = {};
  const strBrackets = [];

  bracketsConfig.forEach(el => config[el[0]] = el[1]);

  brackets.forEach(el => {
    return (el === (strBrackets[strBrackets.length-1] || 0)) ?
      strBrackets.pop() :
      strBrackets.push(config[el]);
  });

  return !strBrackets.length ? true : false;
}