const arr = document.querySelector(".arr");
const max = document.querySelector(".max");

let number = [511, 22, 107, 1005, 13, 50, 10];

let maxNumber = Math.max(...number)

max.textContent = maxNumber;