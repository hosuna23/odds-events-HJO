const app = document.querySelector("#app");

let bank = [];
let odds = [];
let evens = [];

function createForm() {
  const form = document.createElement("form");

  form.innerHTML = `
    <label>
      Add a number:
      <input type="number" name="number" />
    </label>
    <button type="submit">Add Number</button>
    <button type="button" id="sortOne">Sort 1</button>
    <button type="button" id="sortAll">Sort All</button>
  `;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const input = Number(event.target.number.value);
    if (!isNaN(input)) {
      bank.push(input);
      render();
    }
  });

  form.querySelector("#sortOne").addEventListener("click", function () {
    if (bank.length > 0) {
      const number = bank.shift();
      if (number % 2 === 0) {
        evens.push(number);
      } else {
        odds.push(number);
      }
      render();
    }
  });

  form.querySelector("#sortAll").addEventListener("click", function () {
    while (bank.length > 0) {
      const number = bank.shift();
      if (number % 2 === 0) {
        evens.push(number);
      } else {
        odds.push(number);
      }
    }
    render();
  });

  return form;
}

function render() {
  app.innerHTML = `
    <h1>Odd and Even Sorter</h1>
    <div id="formContainer"></div>
    <h2>Bank</h2>
    <p>${bank.join(", ")}</p>
    <h2>Odd Numbers</h2>
    <p>${odds.join(", ")}</p>
    <h2>Even Numbers</h2>
    <p>${evens.join(", ")}</p>
  `;

  const formContainer = app.querySelector("#formContainer");
  formContainer.appendChild(createForm());
}

render();
