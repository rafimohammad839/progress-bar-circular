const number = document.getElementById('number');

let counter = 0;
const id = setInterval(() => {
  if (counter === 65) {
    clearInterval(id);
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 30);