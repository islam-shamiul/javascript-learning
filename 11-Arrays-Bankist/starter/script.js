'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovement = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    //console.log(html);
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accu, mov) => accu + mov, 0);

  labelBalance.textContent = `${acc.balance}???
  `;
};

const displaySummery = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((accu, inc) => accu + inc, 0);
  labelSumIn.textContent = `${income}???`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((accu, out) => accu + out, 0);
  labelSumOut.textContent = `${Math.abs(out)}???`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .reduce((accu, inter) => accu + inter, 0);
  labelSumInterest.textContent = `${interest}???`;
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const user = 'Steven Thomas Williams';
const createUSerName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUSerName(accounts);
console.log(accounts);

const updateUi = function (currentAccount) {
  displayMovement(currentAccount.movements);
  displayBalance(currentAccount);
  displaySummery(currentAccount);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent from from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and Welcome message
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    console.log('LOGIN');
    //clear fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciver = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferTo.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    reciver &&
    reciver !== currentAccount &&
    currentAccount.balance > amount
  ) {
    currentAccount.movements.push(-amount);
    reciver.movements.push(amount);
    updateUi(currentAccount);
    console.log('Amount Transfered');
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loan = Number(inputLoanAmount.value);
  console.log(loan);
  if (loan > 0 && currentAccount.movements.some(mov => mov >= loan / 10)) {
    currentAccount.movements.push(loan);
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sort = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sort);
  sort = !sort;
});

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
console.log(arr.slice(1));
console.log(arr);
console.log(arr.slice(1, 10));
console.log(arr.slice(1, -1));

//splice
console.log(arr.splice(1, 2, 'f', 'g'));
console.log(arr);
console.log(arr.splice(1, 2, 'b', 'c'));

//reverse
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//Concat

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//For of and forEach loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//for of
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} : You have deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} : You have withdrow ${Math.abs(mov)}`);
  }
}
console.log('----------------ForEach----------------');
movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} : You have deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} : You have withdrow ${Math.abs(mov)}`);
  }
});


//map-------------------------------------------------
const euroToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1} : You have ${
    mov > 0 ? 'Deposit' : 'Withdrow'
  } ${Math.abs(mov)}`;
});

console.log(movementsDescriptions);

//filter-------------------------------------------------
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

//useing for of

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//reduce-----------------------------------------------------

const balance = movements.reduce((accu, mov) => accu + mov, 0);
console.log(balance);

let balanceFor = 0;

for (const mov of movements) {
  balanceFor += mov;
}
console.log(balanceFor);

const max = movements.reduce((accu, mov) => (accu > mov ? accu : mov), 0);
console.log(max);
*/

//array sorting
//normal sorting
console.log(movements.sort());
//ascending sorting
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});

console.log(movements);

//decending order

movements.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  console.log('decending');
});

console.log(movements);
