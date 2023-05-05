// Global Variabel
var isVisited: Array<Array<Boolean>> = []; //two dimensional array of boolean
var paranthasesCombination: Array<Array<Array<string>>> = []; //Two dimensional array of list of string to memoized combination

for (let i = 0; i <= 8; i++) {
  if (!paranthasesCombination[i]) {
    paranthasesCombination[i] = [];
  }

  if (!isVisited[i]) {
    isVisited[i] = [];
  }

  for (let j = 0; j <= 8; j++) {
    if (!paranthasesCombination[i][j]) {
      paranthasesCombination[i][j] = [];
    }

    if (!isVisited[i][j]) {
      isVisited[i][j] = false;
    }
  }
}

function generateParenthesis(n: number): string[] {
  return constructParanthesis(n, n);
}

function constructParanthesis(l: number, r: number): string[] {
  var currentCombination: string[] = [];

  // Base Case
  if (l < 0 || r < 0) {
    return [];
  } else {
    if (isVisited[l][r]) return paranthasesCombination[l][r];
  }

  // Recrusive
  if (l == r) {
    var temp: string[] = [];

    // Concat "(" with all posibility

    temp = constructParanthesis(l - 1, r);
    if (temp.length != 0) {
      for (var i = 0; i < temp.length; i++) {
        currentCombination.push("(".concat(temp[i]));
      }
    } else {
      l != 0 ? currentCombination.push("(") : [];
    }
  } else if (l < r) {
    var temp: string[] = [];

    // Concat "(" with all posibility

    temp = constructParanthesis(l - 1, r);
    if (temp.length != 0) {
      for (var i = 0; i < temp.length; i++) {
        currentCombination.push("(".concat(temp[i]));
      }
    } else {
      l != 0 ? currentCombination.push("(") : [];
    }

    // Concat ")" with all posibility

    temp = constructParanthesis(l, r - 1);
    if (temp.length != 0) {
      for (var i = 0; i < temp.length; i++) {
        currentCombination.push(")".concat(temp[i]));
      }
    } else {
      r != 0 ? currentCombination.push(")") : [];
    }
  }

  isVisited[l][r] = true;
  paranthasesCombination[l][r] = currentCombination;

  return paranthasesCombination[l][r];
}
