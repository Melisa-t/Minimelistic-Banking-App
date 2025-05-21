const userInput = document.querySelector(`.input-name`);
const userPass = document.querySelector(`.pass`);
const logInBtn = document.querySelector(`.log-in-btn`);

const dateLabel = document.querySelector(`.date`);
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

let logOutText = document.querySelector(`.log-out-notice`);

const account1 = {
  owner: `Melisa Lachev`,
  movements: [200, 400, 500, -300, 1200, -500, 3000],
  interestRate: 1.2,
  pin: 4444,
  currency: `BGN`,
  movementsDates: [
    "2025-02-18T17:01:17.194Z",
    "2025-03-19T17:01:17.194Z",
    "2025-03-20T17:01:17.194Z",
    "2025-03-24T17:01:17.194Z",
    "2025-04-17T17:01:17.194Z",
    "2025-05-17T17:01:17.194Z",
    "2025-05-19T23:36:17.929Z",
  ],
  locale: `bg-BG`,
};
const account2 = {
  owner: `Kristian Lachev`,
  movements: [200, 400, 500, -300, 1200, -500, 3000],
  interestRate: 2.4,
  pin: 8888,
  currency: `EUR`,
  movementsDates: [
    "2025-02-18T17:01:17.194Z",
    "2025-03-19T17:01:17.194Z",
    "2025-03-20T17:01:17.194Z",
    "2025-03-24T17:01:17.194Z",
    "2025-04-17T17:01:17.194Z",
    "2025-05-17T17:01:17.194Z",
    "2025-05-19T23:36:17.929Z",
  ],
  locale: `bg-BG`,
};

const account3 = {
  owner: `Busra O.`,
  movements: [213, 1341, 231, -231, 312, -111, 33131],
  interestRate: 2,
  pin: 1010,
  currency: `TRY`,
  movementsDates: [
    "2025-02-18T17:01:17.194Z",
    "2025-03-19T17:01:17.194Z",
    "2025-03-20T17:01:17.194Z",
    "2025-03-24T17:01:17.194Z",
    "2025-04-17T17:01:17.194Z",
    "2025-05-17T17:01:17.194Z",
    "2025-05-19T23:36:17.929Z",
  ],
  locale: `tr-TR`,
};

const account4 = {
  owner: `Rumeysa K.`,
  movements: [1231, 213, 456, -975, 34534, -987, 4642],
  interestRate: 2,
  pin: 8888,
  currency: `TRY`,
  movementsDates: [
    "2025-02-18T17:01:17.194Z",
    "2025-03-19T17:01:17.194Z",
    "2025-03-20T17:01:17.194Z",
    "2025-03-24T17:01:17.194Z",
    "2025-04-17T17:01:17.194Z",
    "2025-05-17T17:01:17.194Z",
    "2025-05-19T23:36:17.929Z",
  ],
  locale: `tr-TR`,
};
const account5 = {
  owner: `Buse B.`,
  movements: [43452, 123, 422, -4232, 5242, -2342, 574567],
  interestRate: 2,
  pin: 1111,
  currency: `TRY`,
  movementsDates: [
    "2025-02-18T17:01:17.194Z",
    "2025-03-19T17:01:17.194Z",
    "2025-03-20T17:01:17.194Z",
    "2025-03-24T17:01:17.194Z",
    "2025-04-17T17:01:17.194Z",
    "2025-05-17T17:01:17.194Z",
    "2025-05-19T23:36:17.929Z",
  ],
  locale: `tr-TR`,
};

const account6 = {
  owner: `Halim Ş.`,
  movements: [4363, 8967, 213, -57563, 45643, -4564, 4564],
  interestRate: 1.2,
  pin: 1010,
  currency: `CNY`,
  movementsDates: [
    "2025-02-18T17:01:17.194Z",
    "2025-03-19T17:01:17.194Z",
    "2025-03-20T17:01:17.194Z",
    "2025-03-24T17:01:17.194Z",
    "2025-04-17T17:01:17.194Z",
    "2025-05-17T17:01:17.194Z",
    "2025-05-19T23:36:17.929Z",
  ],
  locale: `zh-CN`,
};

const account7 = {
  owner: `Simay G.`,
  movements: [234500, 657, 567, -3453, 654, -3453, 3453],
  interestRate: 1.2,
  pin: 9999,
  currency: `CNY`,
  movementsDates: [
    "2025-02-18T17:01:17.194Z",
    "2025-03-19T17:01:17.194Z",
    "2025-03-20T17:01:17.194Z",
    "2025-03-24T17:01:17.194Z",
    "2025-04-17T17:01:17.194Z",
    "2025-05-17T17:01:17.194Z",
    "2025-05-19T23:36:17.929Z",
  ],
  locale: `zh-CN`,
};

const account8 = {
  owner: `Ilayda M. T.`,
  movements: [3242785, 2342, 2342, -324, 2342, -423, 234],
  interestRate: 1.2,
  pin: 3333,
  currency: `TRY`,
  movementsDates: [
    "2025-02-18T17:01:17.194Z",
    "2025-03-19T17:01:17.194Z",
    "2025-03-20T17:01:17.194Z",
    "2025-03-24T17:01:17.194Z",
    "2025-04-17T17:01:17.194Z",
    "2025-05-17T17:01:17.194Z",
    "2025-05-19T23:36:17.929Z",
  ],
  locale: `tr-TR`,
};

const account9 = {
  owner: `Sena T. K.`,
  movements: [200, 403240, 503240, -323400, 123400, -53200, 3000],
  interestRate: 1.2,
  pin: 2222,
  currency: `TRY`,
  movementsDates: [
    "2025-02-18T17:01:17.194Z",
    "2025-03-19T17:01:17.194Z",
    "2025-03-20T17:01:17.194Z",
    "2025-03-24T17:01:17.194Z",
    "2025-04-17T17:01:17.194Z",
    "2025-05-17T17:01:17.194Z",
    "2025-05-19T23:36:17.929Z",
  ],
  locale: `tr-TR`,
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

const calcMovementDates = function (date, locale) {
  const calcDaysPassed = function (date1, date2) {
    return Math.round(Math.abs((date1 - date2) / (1000 * 60 * 60 * 24)));
  };
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);
};

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
    const displayDate = calcMovementDates(date, acc.locale);
    let type = movement > 0 ? `deposit` : `withdrawal`;
    const html = `             <article class="activity-row">
              <div class="activity-date-type-container">
                <div class="activity-type ${type}">
                <div class="activity-no">${i + 1}</div>
                <p>${type.toUpperCase()}</p>
                </div>
                <div class="activity-date">${displayDate}</div>
              </div>
              <div class="activity-amount">${formatCur(
                movement,
                acc.locale,
                acc.currency
              )}</div>
            </article>`;
    bankActivities.insertAdjacentHTML(`afterbegin`, html);
  });
};

const calcAndDisplayBalance = function (acc) {
  acc.totalBalance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  currentBalance.textContent = ` ${formatCur(
    acc.totalBalance,
    acc.locale,
    acc.currency
  )}`;
};

const calcSummary = function (acc) {
  let moneyIn = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  inSummary.textContent = ` ${formatCur(moneyIn, acc.locale, acc.currency)}`;
  let moneyOut = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  outSummary.textContent = `${formatCur(
    Math.abs(moneyOut),
    acc.locale,
    acc.currency
  )}`;
  let interest = acc.movements
    .filter((mov) => mov >= 0)
    .map((dep) => dep * (acc.interestRate / 100))
    .reduce((accu, int) => accu + int, 0);
  interestSummary.textContent = `${formatCur(
    Number(interest),
    acc.locale,
    acc.currency
  )}`;
};

const displayUI = function (currentAccount) {
  informativeText.textContent = `Welcome back, ${
    currentAccount.owner.split(` `)[0]
  }!`;
  userInput.value = userPass.value = ``;
  appContainer.style.display = `flex`;
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

let currentAccount, timer, updater;

const updateDisplay = function (currentAccount) {
  displayMovements(currentAccount);
  calcAndDisplayBalance(currentAccount);
  calcSummary(currentAccount);
  resetTimer();
};

logInBtn.addEventListener(`click`, () => {
  currentAccount = accounts.find(
    (accounts) => accounts.username === userInput.value
  );
  if (currentAccount?.pin === Number(userPass.value)) {
    //display ui msg, movements, balance, summary
    updateDisplay(currentAccount);
    displayUI(currentAccount);
    updateBalanceText();
  } else {
    openModal();
    userInput.value = userPass.value = ``;
  }
});
let receiverAccount;

const updateBalanceText = function () {
  const updateText = function () {
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    dateLabel.textContent = ` ${new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now)}`;
  };
  updateText();
  updater = setInterval(updateText, 1000);
  return updater;
};

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
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

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
    acc.movementsDates.push(new Date().toISOString());
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
    appContainer.style.display = `none`;
    informativeText.textContent = `Log in to get started`;
    confirmUser.value = confirmPIN.value = ``;
    if (timer) clearInterval(timer);
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

const startLogOutTimer = function () {
  let time = 600;

  const tick = function () {
    let min = Math.trunc(time / 60);
    let sec = Math.trunc(time % 60);

    logOutText.textContent = `You will be logged out in ${String(min).padStart(
      2,
      0
    )}:${String(sec).padStart(2, 0)}`;

    if (time === 0) {
      clearInterval(timer);
      informativeText.textContent = `Log in to get started`;
      appContainer.style.display = `none`;
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const resetTimer = function () {
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();
};
