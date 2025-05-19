const userInput = document.querySelector(`.input-name`);
const userPass = document.querySelector(`.pass`);
const logInBtn = document.querySelector(`.log-in-btn`);

const date = document.querySelector(`.date`);
const appContainer = document.querySelector(`.app-container`);

let informativeText = document.querySelector(`.informative-text`);

let currentBalance = document.querySelector(`.current-balance`);

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
  interestRate: 1.2,
  pin: 4444,
};

const account2 = {
  owner: `Kristian Lachev`,
  movements: [200, 400, 500, -300, 1200, -500, 3000],
  interestRate: 2.4,
  pin: 8888,
};

const account3 = {
  owner: `Busra Onat`,
  movements: [213, 1341, 231, -231, 312, -111, 33131],
  interestRate: 2,
  pin: 7100,
};

const account4 = {
  owner: `Rumeysa Kilic`,
  movements: [1231, 213, 456, -975, 34534, -987, 4642],
  interestRate: 2,
  pin: 8800,
};
const account5 = {
  owner: `Buse Boran`,
  movements: [3243, 123, 422, -4232, 5242, -2342, 574567],
  interestRate: 2,
  pin: 5110,
};

const accounts = [account1, account2, account3, account4, account5];

const displayMovements = function (acc) {
  acc.movements.forEach(function (mov, i) {
    let type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `             <article class="activity-row">
              <div class="activity-date-type-container">
                <div class="activity-type ${type}">
                <div class="activity-no">${i + 1}</div>
                <p>${type.toUpperCase()}</p>
                </div>
                <div class="activity-date"></div>
              </div>
              <div class="activity-amount">${mov}€</div>
            </article>`;
    bankActivities.insertAdjacentHTML(`afterbegin`, html);
  });
};

let totalBalance;
const calcAndDisplayBalance = function (acc) {
  totalBalance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  currentBalance.textContent = ` ${totalBalance}€`;
};

const calcSummary = function (acc) {
  let moneyIn = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  inSummary.textContent = ` ${moneyIn}€`;
  let moneyOut = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  outSummary.textContent = `${Math.abs(moneyOut)}€`;
  let interest = acc.movements
    .filter((mov) => mov >= 0)
    .map((dep) => dep * (acc.interestRate / 100))
    .reduce((accu, int) => accu + int, 0);
  interestSummary.textContent = `${interest}€`;
};

const displayUI = function (currentAccount) {
  informativeText.textContent = `Welcome, ${
    currentAccount.owner.split(` `)[0]
  }!`;
  userInput.value = userPass.value = ``;
  appContainer.style.opacity = 100;
  userPass.blur();
};

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

let currentAccount;

logInBtn.addEventListener(`click`, () => {
  currentAccount = accounts.find(
    (accounts) => accounts.username === userInput.value
  );
  if (currentAccount?.pin === Number(userPass.value)) {
    //display ui msg, movements, balance, summary
    displayMovements(currentAccount);
    calcAndDisplayBalance(currentAccount);
    calcSummary(currentAccount);
    displayUI(currentAccount);
  }
});
let receiverAccount;
const sendMoney = function () {
  ///take value from transfer amount and push it to transfer name
  //that amoutn will be withdrawal from the current account
  receiverAccount = accounts.find(
    (accounts) => accounts.username === transferTo.value
  );
  if (
    receiverAccount !== currentAccount &&
    !(receiverAccount === undefined || receiverAccount === null) &&
    Number(transferAmount.value) <= totalBalance
  ) {
    receiverAccount?.movements.push(Number(transferAmount.value));
    currentAccount.movements.push(Number(`-${transferAmount.value}`));
    displayMovements(currentAccount);
    calcAndDisplayBalance(currentAccount);
    calcSummary(currentAccount);
  } else if (receiverAccount === undefined || receiverAccount === null) {
    alert(`Please choose a valid account!`);
  } else if (totalBalance < 0 || Number(transferAmount.value) > totalBalance) {
    alert(`You don't have enough money!`);
  } else {
    alert(`Please choose an account that is not yours!`);
  }
};

transferBtn.addEventListener(`click`, () => {
  sendMoney();
});
