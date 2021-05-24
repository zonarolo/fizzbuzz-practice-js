function fizzbuzz(num) {

  if (typeof num !== 'number') {
    return "Error: the argument must be a number";
  }

  const divisible = (divisor, num) => num % divisor === 0;

  if (num === 0) {
    return 0;
  }

  if (divisible(3, num) && divisible(5, num)) {
    return "FizzBuzz";
  }

  if (divisible(3, num)) {
    return "Fizz";
  }

  if (divisible(5, num)) {
    return "Buzz";
  }

  return num;
}

function print(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
}

print("100");

module.exports = fizzbuzz;
