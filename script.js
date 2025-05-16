const userInput = document.querySelector(`.input-name`);
const userPass = document.querySelector(`.pass`);

const date = document.querySelector(`.date`);

const currentBalance = document.querySelector(`.current-balance`);

const bankActivities = document.querySelector(`.bank-activities`);

let transferTo = document.getElementById("transfer-to");
let transferAmount = document.getElementById("transfer-amount");
const transferBtn = document.querySelector(`.transfer-btn`);

let requestAmount = document.getElementById("request.amount");
const requestBtn = document.querySelector(`.request-btn`);

let confirmUser = document.getElementById("confirm-user");
let confirmPIN = document.getElementById("confirm-pin");

let activityNo = document.querySelector(`.activity-no`);
let activityDate = document.querySelector(`.activity-date`);
let activityAmount = document.querySelector(`.activity-amount`);

let inSummary = document.querySelector(`.in-summary`);
let outSummary = document.querySelector(`.out-summary`);
let interestSummary = document.querySelector(`.interest`);
const sortBtn = document.querySelector(`.sort-btn`);

const account1 = {
  owner: `Melisa Lachev`,
  movements: [200, 400, 500, -300, 1200, -500, 3000],
  interestRate: 2,
  pin: 4444,
};

const account2 = {
  owner: `Kristian Lachev`,
  movements: [2000, 4000, 5000, -3000, 12000, -5000, 30000],
  interestRate: 2,
  pin: 8888,
};

const account3 = {
  owner: `Busra Onat`,
  movements: [2000, 4000, 5000, -3000, 12000, -5000, 30000],
  interestRate: 2,
  pin: 7100,
};

const account4 = {
  owner: `Rumeysa Kilic`,
  movements: [2000, 4000, 5000, -3000, 12000, -5000, 30000],
  interestRate: 2,
  pin: 8800,
};
const account5 = {
  owner: `Buse Boran`,
  movements: [2000, 4000, 5000, -3000, 12000, -5000, 30000],
  interestRate: 2,
  pin: 5110,
};

const accounts = [account1, account2, account3, account4, account5];

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    let type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `             <article class="activity-row">
              <div class="activity-date-type-container">
                <div class="activity-type ${type}">
                <div class="activity-no">${i + 1}</div>
                <p>${type.toUpperCase()}</p>
                </div>
                <div class="activity-date"></div>
              </div>
              <div class="activity-amount">${mov}</div>
            </article>`;
    bankActivities.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcAndPrintBalance = function (movements) {
  const totalBalance = movements.reduce((acc, curr) => acc + curr, 0);
  currentBalance.textContent = totalBalance;
};

const calcSummary = function (movements) {
  let moneyIn = movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  console.log(moneyIn);
  inSummary.textContent = moneyIn;
  let moneyOut = String(
    movements.filter((mov) => mov < 0).reduce((acc, curr) => acc + curr, 0)
  ).replaceAll(`-`, ``);
  outSummary.textContent = moneyOut;
};
calcSummary(account1.movements);

displayMovements(account1.movements);

const createUserName = function (accArr) {
  accArr.forEach(function (acc, i) {
    acc.username = acc.owner
      .split(` `)
      .map((acc) => acc[0])
      .join(``)
      .toLowerCase();
  });
};

createUserName(accounts);

const deposits = account1.movements.filter(function (mov) {
  return mov > 0;
});

const withdrawals = account2.movements.filter((mov) => mov < 0);

console.log(deposits);
