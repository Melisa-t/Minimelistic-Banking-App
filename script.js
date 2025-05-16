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

const account1 = {
  owner: `Melisa Lachev`,
  movements: [200, 400, 500, -300, 1200, -500, 3000],

  pin: 444,
};

const account2 = {
  owner: `Kristian Lachev`,
  movements: [2000, 4000, 5000, -3000, 12000, -5000, 30000],

  pin: 444,
};

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    let type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `<div class="activity-row">
              <div class="activity-date-type-container">
                <div class="activity-type ${type}">
                  <div class="activity-no">${i + 1}</div>
                  <p>${type.toUpperCase()}</p>
                </div>
                <div class="activity-date">16/05/2025</div>
              </div>
              <div class="activity-amount">${mov}</div>
            </div>`;
    bankActivities.insertAdjacentHTML(`afterbegin`, html);
  });
};

displayMovements(account2.movements);
