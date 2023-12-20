// ex 1

let sumControl = function (num1, num2) {
  if (num1 === 50 || num2 === 50) {
    return true;
  } else if (num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
};

console.log(sumControl(25, 25));

// ex 2

let removeChar = function (string, position) {
  let cuttedString = string.slice(0, position) + string.slice(position + 1);
  return cuttedString;
};

console.log(removeChar("non entrah", 4));

// ex 3

let rangeControl = function (n1, n2) {
  if (
    ((n1 >= 40 && n1 <= 60) || (n1 >= 70 && n1 <= 100)) &&
    ((n2 >= 40 && n2 <= 60) || (n2 >= 70 && n2 <= 100))
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(rangeControl(20, 80));

// ex 4

let cityReturner = function (cityName) {
  if (cityName.startsWith("Los") || cityName.startsWith("New")) {
    return cityName;
  } else {
    return false;
  }
};

console.log(cityReturner("Nueva York"));

// ex 5

let sumArr = function (numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
};

console.log(sumArr([2, 3, 4, 5]));

// ex 6

let controlArr = function (nArray) {
  if (nArray.includes(1) || nArray.includes(3)) {
    return false;
  } else {
    return true;
  }
};

console.log(controlArr([0, 5, 4, 6]));

// ex 7

let degChecker = function (deg) {
  if (deg < 90) {
    return "acuto";
  } else if (deg === 90) {
    return "retto";
  } else if (deg > 90 && deg < 180) {
    return "ottuso";
  } else if (deg === 180) {
    return "piatto";
  } else {
    return "studia gli angoli";
  }
};

console.log(degChecker(200));

// ex 8

let Shortener = function (string) {
  let acronimo = "";
  let strArray = string.split(" ");
  for (let i = 0; i < strArray.length; i++) {
    acronimo += Array.from(strArray[i])[0].toUpperCase();
  }
  return acronimo;
};

console.log(Shortener("e non ti rimando all' hotel"));

// ex 1 extra

let findMax = function (string) {
  let max = 0;
  let maxChar = "";
  let arrFromStr = string.toLowerCase().split("");
  for (const char of arrFromStr) {
    if (string.split(char).length > max) {
      max = string.split(char).length;
      maxChar = char;
    }
  }
  return maxChar;
};

console.log(
  findMax(
    "trentatrè trentini entrarono a trento tutti e trentatrè trotterellando"
  )
);

// ex 2 extra

let anagramControl = function (string1, string2) {
  let string1Arr = string1.toLowerCase().split("");
  let string2Arr = string2.toLowerCase().split("");
  let trueOrFalse;
  for (const letter of string1Arr) {
    if (string2Arr.includes(letter)) {
      trueOrFalse = true;
    } else {
      trueOrFalse = false;
      break;
    }
  }
  for (const letter of string2Arr) {
    if (string1Arr.includes(letter)) {
      trueOrFalse = true;
    } else {
      trueOrFalse = false;
      break;
    }
  }
  return trueOrFalse;
};

console.log(anagramControl("porco", "ocrop"));

// ex 3 extra

let superAnagramControl = function (string, list) {
  let anagrams = [];
  for (const word of list) {
    if (anagramControl(string, word)) {
      anagrams.push(word);
    }
  }
  return anagrams;
};

console.log(
  superAnagramControl("porco", ["ocrop", "orcod", "cropod", "rocop"])
);

// ex 4 extra

let controlPalindrome = function (string) {
  let lToR = [];
  let rtoL = [];
  let strToArr = string.toLowerCase().replace(/\s/g, "").split("");
  for (let i = 0; i < strToArr.length; i++) {
    lToR.push(strToArr[i]);
  }
  for (let y = strToArr.length - 1; y >= 0; y--) {
    rtoL.push(strToArr[y]);
  }
  let lToRString = lToR.toString();
  let rToLString = rtoL.toString();
  if (lToRString === rToLString) {
    return true;
  } else {
    return false;
  }
};

console.log(controlPalindrome("E VIDE TRE CORTEI DI NANI DIETRO CERTE DIVE"));

// ex 5 extra

let reverseNumber = function (number) {
  let strNumber = number.toString();
  let arrNumber = strNumber.split("");
  let reversedArr = [];
  for (let i = arrNumber.length - 1; i >= 0; i--) {
    reversedArr.push(arrNumber[i]);
  }
  let reversedString = reversedArr.join("");
  let reversedNumber = parseInt(reversedString);
  return reversedNumber;
};

console.log(reverseNumber(435));

// ex 6 extra

let printStair = function (number) {
  let hash = "#";
  while (number > 0) {
    console.log(hash);
    hash += "#";
    number--;
  }
};

printStair(3);

// ex 7 extra

let reverseString = function (string) {
  let arrToReverse = string.split("");
  let reversedArray = [];
  for (let i = arrToReverse.length - 1; i >= 0; i--) {
    reversedArray.push(arrToReverse[i]);
  }
  stringReversed = reversedArray.join("");
  return stringReversed;
};

console.log(reverseString("tutto il contrario"));

// ex 8 extra

let arrayDivider = function (array, number) {
  let splittedArray = [];
  for (let i = 0; i < array.length; i += number) {
    splittedArray.push(array.slice(i, i + number));
  }
  return splittedArray;
};

console.log(arrayDivider([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// ex 9 extra

let printPiramid = function (number) {
  let hash = "#";
  let space = " ";
  for (let i = number; i > 0; i--) {
    console.log(space.repeat(i) + hash);
    hash += "##";
  }
};

printPiramid(5);

// ex 10 extra

let spiralMatrix = function (n) {
  let row = 0;
  let col = 0;
  let endRow = n - 1;
  let endCol = n - 1;
  let counter = 1;
  let matrixOutput = Array.from({ length: n }, () => Array(n).fill(0));
  while (col <= endCol && row <= endRow) {
    for (let i = col; i <= endCol; i++) {
      matrixOutput[row][i] = counter;
      counter++;
    }
    row++;
    for (let i = row; i <= endRow; i++) {
      matrixOutput[i][endCol] = counter;
      counter++;
    }
    endCol--;
    for (let i = endCol; i >= col; i--) {
      matrixOutput[endRow][i] = counter;
      counter++;
    }
    endRow--;
    for (let i = endRow; i >= row; i--) {
      matrixOutput[i][col] = counter;
      counter++;
    }
    col++;
  }
  return matrixOutput;
};

console.log(spiralMatrix(6));
