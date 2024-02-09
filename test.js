/* function cutTwentyPercentInPlace(arr) {
  const reductionPercentage = 0.2;
  const threshold = 3000;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= threshold) {
          arr[i] -= arr[i] * reductionPercentage;
      }
  }

  return arr;
}

// Example usage:
const numbersArray = [2500, 3500, 2800, 4000];
cutTwentyPercentInPlace(numbersArray);
console.log(numbersArray);

*/

function sumArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
const resultSum = sumArrayElements(numbersArray);
console.log(resultSum);