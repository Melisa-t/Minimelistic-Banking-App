const userInput = document.querySelector(`.input-name`);
const userPass = document.querySelector(`.pass`);

const date = document.querySelector(`.date`);

const currentBalance = document.querySelector(`.current-balance`);

const bankActivities = document.querySelector(`.bank-activities`);

let transferTo = document.getElementById("transfer-to").value;
let transferAmount = document.getElementById("transfer-amount").value;
const transferBtn = document.querySelector(`.transfer-btn`);

let requestAmount = document.getElementById("request.amount").value;
const requestBtn = document.querySelector(`.request-btn`);

let confirmUser = document.getElementById("confirm-user").value;
let confirmPIN = document.getElementById("confirm-pin").value;

let activityNo = document.querySelector(`.activity-no`);
let activityDate = document.querySelector(`.activity-date`);
let activityAmount = document.querySelector(`.activity-amount`);
