const arr = ["a", "b", "a", "c", "b", "a"];

function countDuplicates(arr) {
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i];

    if (counts[letter] === undefined) {
      counts[letter] = 1;
    } else {
      counts[letter] = counts[letter] + 1;
    }
  }

  return counts;
}

console.log(countDuplicates(arr));
