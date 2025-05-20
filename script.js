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

let requestAmount = document.getElementById("request-amount");
const requestBtn = document.querySelector(`.request-btn`);

let confirmUser = document.getElementById("confirm-user");
let confirmPIN = document.getElementById("confirm-pin");
const confirmBtn = document.querySelector(`.confirm-btn`);

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
  currency: `лв`,
  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-05-27T17:01:17.194Z",
    "2024-07-11T23:36:17.929Z",
  ],
};

const account2 = {
  owner: `Kristian Lachev`,
  movements: [200, 400, 500, -300, 1200, -500, 3000],
  interestRate: 2.4,
  pin: 8888,
  currency: `€`,
  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-05-27T17:01:17.194Z",
    "2024-07-11T23:36:17.929Z",
  ],
};

const account3 = {
  owner: `Busra O.`,
  movements: [213, 1341, 231, -231, 312, -111, 33131],
  interestRate: 2,
  pin: 1010,
  currency: `₺`,
  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-05-27T17:01:17.194Z",
    "2024-07-11T23:36:17.929Z",
  ],
};

const account4 = {
  owner: `Rumeysa K.`,
  movements: [1231, 213, 456, -975, 34534, -987, 4642],
  interestRate: 2,
  pin: 8888,
  currency: `₺`,
  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-05-27T17:01:17.194Z",
    "2024-07-11T23:36:17.929Z",
  ],
};
const account5 = {
  owner: `Buse B.`,
  movements: [43452, 123, 422, -4232, 5242, -2342, 574567],
  interestRate: 2,
  pin: 1111,
  currency: `$`,
  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-05-27T17:01:17.194Z",
    "2024-07-11T23:36:17.929Z",
  ],
};

const account6 = {
  owner: `Halim Ş.`,
  movements: [4363, 8967, 213, -57563, 45643, -4564, 4564],
  interestRate: 1.2,
  pin: 1010,
  currency: `₺`,
  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-05-27T17:01:17.194Z",
    "2024-07-11T23:36:17.929Z",
  ],
};

const account7 = {
  owner: `Sımay G.`,
  movements: [234500, 657, 567, -3453, 654, -3453, 3453],
  interestRate: 1.2,
  pin: 9999,
  currency: `₺`,
  movementsDates: [
    "2023-10-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-05-27T17:01:17.194Z",
    "2024-07-11T23:36:17.929Z",
  ],
};

const account8 = {
  owner: `Ilayda M. T.`,
  movements: [3242785, 2342, 2342, -324, 2342, -423, 234],
  interestRate: 1.2,
  pin: 3333,
  currency: `₺`,
  movementsDates: [
    "2023-11-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2023-05-28T09:15:04.904Z",
    "2024-06-01T10:17:24.185Z",
    "2024-07-08T14:11:59.604Z",
    "2024-07-27T17:01:17.194Z",
    "2024-08-11T23:36:17.929Z",
  ],
};

const account9 = {
  owner: `Sena T. K.`,
  movements: [200, 403240, 503240, -323400, 123400, -53200, 3000],
  interestRate: 1.2,
  pin: 2222,
  currency: `₺`,
  movementsDates: [
    "2023-10-18T21:31:17.178Z",
    "2023-12-23T07:42:02.383Z",
    "2024-02-28T09:15:04.904Z",
    "2024-04-01T10:17:24.185Z",
    "2024-05-08T14:11:59.604Z",
    "2024-05-27T17:01:17.194Z",
    "2024-07-11T23:36:17.929Z",
  ],
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
];

const displayMovements = function (acc, sort = false) {
  bankActivities.innerHTML = ``;
  const combinedMovementAndDates = currentAccount.movements.map((mov, i) => ({
    movement: mov,
    movementDate: currentAccount.movementsDates.at(i),
  }));
  if (sort) {
    combinedMovementAndDates.sort((a, b) => a.movement - b.movement);
  }
  combinedMovementAndDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    const date = new Date(movementDate);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;
    let type = movement > 0 ? `deposit` : `withdrawal`;
    const html = `             <article class="activity-row">
              <div class="activity-date-type-container">
                <div class="activity-type ${type}">
                <div class="activity-no">${i + 1}</div>
                <p>${type.toUpperCase()}</p>
                </div>
                <div class="activity-date">${displayDate}</div>
              </div>
              <div class="activity-amount">${movement.toFixed(2)}${
      acc.currency
    }</div>
            </article>`;
    bankActivities.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcAndDisplayBalance = function (acc) {
  acc.totalBalance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  currentBalance.textContent = ` ${acc.totalBalance.toFixed(2)}${acc.currency}`;
};

const calcSummary = function (acc) {
  let moneyIn = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  inSummary.textContent = ` ${moneyIn.toFixed(2)}${acc.currency}`;
  let moneyOut = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  outSummary.textContent = `${Math.abs(moneyOut.toFixed(2))}${acc.currency}`;
  let interest = acc.movements
    .filter((mov) => mov >= 0)
    .map((dep) => dep * (acc.interestRate / 100))
    .reduce((accu, int) => accu + int, 0);
  interestSummary.textContent = `${Number(interest.toFixed(2))}${acc.currency}`;
};

const displayUI = function (currentAccount) {
  informativeText.textContent = `Welcome back, ${
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

const updateDisplay = function (currentAccount) {
  displayMovements(currentAccount);
  calcAndDisplayBalance(currentAccount);
  calcSummary(currentAccount);
};

logInBtn.addEventListener(`click`, () => {
  currentAccount = accounts.find(
    (accounts) => accounts.username === userInput.value
  );
  if (currentAccount?.pin === Number(userPass.value)) {
    //display ui msg, movements, balance, summary
    updateDisplay(currentAccount);
    displayUI(currentAccount);
  } else {
    openModal();
    userInput.value = userPass.value = ``;
  }
});
let receiverAccount;

const sendMoney = function (acc) {
  ///take value from transfer amount and push it to transfer name
  //that amoutn will be withdrawal from the current account
  receiverAccount = accounts.find(
    (accounts) => accounts.username === transferTo.value
  );
  if (
    receiverAccount?.username !== currentAccount.username &&
    receiverAccount &&
    Number(transferAmount.value) <= acc.totalBalance &&
    Number(transferAmount.value) > 0
  ) {
    receiverAccount?.movements.push(Number(transferAmount.value));
    currentAccount.movements.push(Number(`-${transferAmount.value}`));
    currentAccount.movementsDates.push(now.toISOString());
    receiverAccount.movementsDates.push(now.toISOString());

    updateDisplay(currentAccount);
  } else if (receiverAccount === undefined || receiverAccount === null) {
    alert(`Please choose a valid account!`);
  } else if (
    acc.totalBalance < 0 ||
    Number(transferAmount.value) > acc.totalBalance
  ) {
    alert(`You don't have enough money!`);
  } else if (Number(transferAmount.value) === 0) {
    alert(`Enter a valid value!`);
  } else {
    alert(`Please choose an account that is not yours!`);
  }
  transferTo.value = transferAmount.value = ``;
};

const requestMoney = function (acc) {
  //user types in the amount they want,  and after clicking on btn
  // the amount is deposited into their account
  const loan = Math.floor(requestAmount.value);
  const TenPercentDeposit = acc.movements.some(
    (mov) => mov >= (loan * 10) / 100
  );

  if (loan > 0 && TenPercentDeposit) {
    acc.movements.push(loan);
    acc.movementsDates.push(now.toISOString());
    updateDisplay(currentAccount);
  } else if (loan <= 0) {
    alert(`Please enter a valid value!`);
  } else {
    alert(
      `You need to have a previous deposit of at least 10% of the requested amount! `
    );
  }

  requestAmount.value = ``;
};

requestBtn.addEventListener(`click`, () => {
  requestMoney(currentAccount);
});

transferBtn.addEventListener(`click`, () => {
  sendMoney(currentAccount);
});

const closeAccount = function (currentAccount) {
  //find index of the account entered in the accounts array
  //use splice method to remove it from the array
  if (
    confirmUser.value === currentAccount.username &&
    Number(confirmPIN.value) === currentAccount.pin
  ) {
    const accIndex = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(accIndex, 1);
    appContainer.style.opacity = 0;
    informativeText.textContent = `Log in to get started`;
    confirmUser.value = confirmPIN.value = ``;
  }
};

confirmBtn.addEventListener(`click`, () => {
  closeAccount(currentAccount);
});

let sorted = false;

sortBtn.addEventListener(`click`, () => {
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

const modalBtn = document.querySelectorAll(`.modal-btn`);
const overlay = document.querySelector(`.overlay`);
const modalContainer = document.querySelector(`.modal-container`);
const closeBtn = document.querySelector(`.close-btn`);
const modalWindow = document.querySelector(`.modal-window`);

const openModal = function () {
  // for (let i = 0; i < modalBtn.length; i++) {
  //     modalBtn[i].classList.toggle(`hidden`)
  //     };
  modalWindow.classList.remove(`hidden`);
  overlay.style.display = `block`;
};

const closeModal = function () {
  modalWindow.classList.add(`hidden`);
  overlay.style.display = `none`;
};

for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener(`click`, () => {
    openModal();
  });
}

closeBtn.addEventListener(`click`, () => {
  closeModal();
  //   for (let i = 0; i < modalBtn.length; i++) {
  //     modalBtn[i].classList.toggle(`hidden`)
  //     };
});

overlay.addEventListener(`click`, () => {
  closeModal();
});

document.addEventListener(`keydown`, function (e) {
  if (modalWindow.className !== `hidden` && e.key === `Escape`) {
    closeModal();
  }
});

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const minutes = `${now.getMinutes()}`.padStart(2, 0);
date.textContent = ` ${day}/${month}/${year}, ${hour}:${minutes}`;
