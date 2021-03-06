/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  return n === 0 || n === 1 ? 1 : n < 0 ? null : n * factorial(n - 1)
};

// 2. Compute the sum of an array of integers.
let sumElem = function (array) {
  return array.length === 0 ? 0 : array[0] + sumElem(array.slice(1)) 
 //restart function with that value

}

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0) {
    n = n * - 1
  }
  return n === 0 ? true : n === 1 ? false : isEven(n - 2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //create container for array
  return n === 0 ? 0 : (n - 1) + sumBelow(n - 1)

  // let sumBelowArray = [];
  // //create var for sum = 0
  // let sumBelowResult = 0;
  // if (n === 1 || n === 0) {
  //   return 0
  // }
  // //loop n number of times - 1
  // for(var i = 1; i < n; i++) {
  //   //push each number to container
  //   sumBelowArray.push(i) //should contain numbers below n//
  // //close loop
  // }
  // //create inner function
  // let innerSumBelow = function(sumBelowArray) {
  //   //add result var to first elem
  //   sumBelowResult += sumBelowArray[0]
  //   //remove that first value
  //   sumBelowArray.shift();
  //   //if the array still has values
  //   if (sumBelowArray.length >= 1) {
  //     //run inner function again starting from new array value
  //     innerSumBelow(sumBelowArray)
  //   //close condition
  //   }
  // //close inner function
  // }
  // innerSumBelow(sumBelowArray)
  // //return result container
  // return sumBelowResult
};
// sumBelow(n)


// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
let array = [] // array container
  if (x === y) {
    return array;
  }
  array.push(x) //creates single elem array
  return array.concat(range(x + 1, y)) //joins the single elem arrays
}
  // //create array container
  // let rangeArray = []
  // //push x + 1 into array
  // if (x === y || x === y - 1) {
  // 	return [];
  // }
  // if (x < y) {
  //   rangeArray.push(x + 1);
  // } else if (x > y) {
  //   rangeArray.push(x - 1)
  // }
  // //create inner range function x < y
  // let innerRangeIncrease = function(rangeArray) {
  //     //push last elem of array value + 1 into array
  //     rangeArray.push(rangeArray[rangeArray.length - 1] + 1)
  //   //if last elem in array doesnt = y - 1
  //   if (rangeArray[rangeArray.length - 1] !== y - 1) {
  //     //run inner function
  //     innerRangeIncrease(rangeArray);
  //   //close condition
  //   }
  //   //close inner
  // }
  
  // //create inner function for x > y
  //   let innerRangeDecrease = function(rangeArray) {
  //     //push last elem of array value -1 into array
  //     rangeArray.push(rangeArray[rangeArray.length - 1] - 1)
  //   //if last elem in array doesnt = y + 1
  //   if (rangeArray[rangeArray.length - 1] !== y + 1) {
  //     //run inner function
  //     innerRangeDecrease(rangeArray);
  //   //close condition
  //   }
  // //close function for negative numbers
  // }
  
  // //create condition for increase or decrease
  // if (x < y) {
  //   innerRangeIncrease(rangeArray);
  // } else if (x > y) {
  //   innerRangeDecrease(rangeArray);
  // }
  // //return array
  // return rangeArray;
// };


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  return exp === 0 ? 1 : exp === 1 ? base : base * exponent(base, exp - 1);
};

// exponent(3, 4); //81

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true
  }
  if (n < 1) {
    return false
  }
  return powerOfTwo(n/2)
  
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    return string === '' ? '' : string[string.length - 1] + reverse(string.substring(0, string.length - 1))
  // //create new arr container
  // let revArr = [];
  // //split string into array
  // let splitArr = string.split("");
  // //create inner function
  // let innerRev = (string) => {
  //   //create for loop iterating backwards
  //   for (var i = splitArr.length - 1; i >= 0; --i) {;
  //     //push last element in first
  //     revArr.push(splitArr[splitArr.length - 1])
  //     //cut out that elem from splitArr
  //     splitArr.pop();
  //   //close for loop
  //   }
  //   //if (splitArr.length !== 0) {
  //   if (splitArr.length !== 0) {
  //       // run inner function
  //       innerRev(string);
  //   // close condition
  //   }
  // //close inner function
  // }
  // //invoke inner function
  // innerRev(string);
  // //return revArr.join("")
  // return revArr.join("");
  
    // return arr.reverse().join("")
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //create arr container empty
  let compare = [];
  //split string to arr
  string.toLowerCase();
  let arr = string.split("");
  for (var j = 0; j < arr.length; j++) {
    if(arr[j] === ' ') {
      arr.splice(j, 1)
    }
  }
  let test = arr.slice();
  //create inner function
  let inner = function (string) {
    //loop through split arr
    for (var i = 0; i < arr.length; i++) {
      //push last elem of split into container
      compare.push(arr[arr.length - 1]);
      //pop split
      arr.pop();
      //if split length > 0
      if(arr.length >= 1) {
        //invoke inner
        inner(string);
      //close if
      }
    //close loop
    }
  //close inner function
  }
  //invoke inner
  inner()
  //compare string to container
  let newTest = test.join("")
  let newCompare = compare.join("")
  return newTest.toLowerCase() === newCompare.toLowerCase() ? true : false;
};



// let string = 'abby';
// let reverseArray = [];
// var palindrome = function(string) {
//   let splitArray = string.split("");
//   for (var i = 0; i < splitArray.length; i++) {
//     reverseArray.push(splitArray[splitArray.length - 1])
//     splitArray.pop()
//   }
//   if (splitArray.length === 0) {
//     reverseArray.join("");
//   } else {
//     palindrome(splitArray)
//   }
//   console.log(reverseArray)
//   return string === reverseArray.join("") ? true : false;

// };

// palindrome(string)

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  //compare difference of x/y and Math.floor(x/y)
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiplyRes = 0;
var multiply = function(x, y) {
  if (y < 0) {
    for(var j = y; j <= 0; j++){
      multiplyRes -= x
      y++
    } 
  }
  for(var i = 0; i <= y; i++) {
    multiplyRes += x
    y--
  }
  if(y > 0) {
    multiply(x, y);
  }
  return multiplyRes;

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
let count = 0;
let number = 0;
var divide = function(x, y) {
    x = x - y
    count++
  if(x > 0) {
    divide(x, y)
  }

  return count
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  let arr1 = str1.split("")
  let arr2 = str2.split("")
  let inner = function (str1, str2) {
      if (arr1[0] === arr2[0]) {
        arr1.shift()
        arr2.shift()
      }
      if(arr1.length > 0 || arr2.lenght > 0) {
        inner(str1, str2)
      }
  }
  inner(str1, str2)
  return arr1.length !== arr2.length ? false : true
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str,arr) {
  if (str.length === 0) {
    return [];
  } else {
  return createArray(str.slice(0,1),arr.push[str[0]])
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
