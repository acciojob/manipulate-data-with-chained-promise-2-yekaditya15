//your JS code here. If required.
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter((num) => num % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
}

function multiplyNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedNumbers = numbers.map((num) => num * 2);
      resolve(multipliedNumbers);
    }, 2000);
  });
}

getNumbers()
  .then((numbers) => filterEvenNumbers(numbers))
  .then((evenNumbers) => {
    document.getElementById("output").textContent = evenNumbers.join(", ");
    return multiplyNumbers(evenNumbers);
  })
  .then((multipliedNumbers) => {
    document.getElementById("output").textContent = multipliedNumbers.join(", ");
  });
