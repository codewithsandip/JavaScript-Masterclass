var state = {
    balance: 100,
    income: 400,
    expense: 100,
    transactions: [
        { name: 'Salary', amount: 5000, type: 'income' },
        { name: 'Buy Grocery', amount: 50, type: 'expense' },
        { name: 'Buy Guitar', amount: 500, type: 'expense' }
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionsEl = document.querySelector('#transaction');

function init() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var transactionEl, containerEl, amountEl, item, btnEl;

    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionEl = document.createElement('li');
        transactionEl.append(item.name);

        transactionsEl.appendChild(transactionEl);

        containerEl = document.createElement('div');
        amountEl = document.createElement('span');
        if (item.type === 'income') {
            amountEl.classList.add('income-amt');
        } else if (item.type === 'expense') {
            amountEl.classList.add('expense-amt');
        }
        amountEl.innerHTML = `$${item.amount}`;

        containerEl.appendChild(amountEl);

        btnEl = document.createElement('button');
        btnEl.innerHTML = 'X';

        containerEl.appendChild(btnEl);

        transactionEl.appendChild(containerEl);
    }

}

init();
