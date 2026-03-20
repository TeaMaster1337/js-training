const arr = ["a", "b", "a", "c", "b", "a", "a", "ab"];

function countDuplicates(arr) {
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];

    if (counts[letter] === undefined) {
      counts[letter] = 1;
    } else {
      counts[letter]++;
    }
  }

  return counts;
}

function countDuplicates2(arr) {
  const counts = {};

  for (const letter of arr) {
    if (counts[letter] === undefined) {
      counts[letter] = 1;
    } else {
      counts[letter] = counts[letter] + 1;
    }
  }

  return counts;
}
console.log(countDuplicates2(arr));

function countDuplicates(arr) {
  const counts = {};

  arr.forEach((letter) => {
    if (counts[letter] === undefined) {
      counts[letter] = 1;
    } else {
      counts[letter] = counts[letter] + 1;
    }
  });

  return counts;
}
console.log(countDuplicates(arr));

// function countDuplicates(arr) {
//   const result = arr.reduce((acc, letter, index) => {
//     console.log(`Index: ${index} `, acc);
//     if (acc[letter] === undefined) {
//       acc[letter] = 1;
//     } else {
//       acc[letter] = acc[letter] + 1;
//     }
//     return acc;
//   }, {});

//   return result;
// }
// console.log(countDuplicates(arr));
// const numbers = [10, 24, 153, 623, 62, 72, 1, 6, 7322, 2];
// const result = numbers.reduce((acc, number) => acc + number, 0);
// console.log(result);
