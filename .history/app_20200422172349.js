const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 },
];

let transactions = dummyTransactions;

//Add transactions to DOM list
function addTransactionDOM(transactions) {
  //Get sing
  const sing = transactions.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  //Add clase based on value
  item.classList.add(transactions.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
  
  ${transactions.text}<span>${sing}${Math.abs(transactions.amount)}
  </span><button class='delete-btn'</button>`;
}
