function isValid(s: string): boolean {
  var stack: Array<string> = [];

  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "[": {
        stack.push("[");
        break;
      }
      case "{": {
        stack.push("{");
        break;
      }
      case "(": {
        stack.push("(");
        break;
      }
      case "}": {
        if (stack[stack.length - 1] === "{") stack.pop();
        else return false;
        break;
      }
      case "]": {
        if (stack[stack.length - 1] === "[") stack.pop();
        else return false;
        break;
      }
      case ")": {
        if (stack[stack.length - 1] === "(") stack.pop();
        else return false;
        break;
      }
    }
  }

  return stack.length == 0 ? true : false;
}
