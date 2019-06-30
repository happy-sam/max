const arr = document.querySelector(".arr");
const max = document.querySelector(".max");

let number = [511, 22, 107, 1005, 13, 50, 10];

arr.textContent = number;

let compare = (a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
};

number.sort(compare);

max.textContent = number[number.length - 1]
