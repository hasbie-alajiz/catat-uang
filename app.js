const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const expenseTotal = document.getElementById('expenseTotal');

const expenses = [];

expenseForm.addEventListener("submit", function(e){
    e.preventDefault();

    const expenseName = document.getElementById('expenseName').value;
    const expenseNominal = document.getElementById('expenseNominal').valueAsNumber;
    const expenseCategory = document.getElementById('expenseCategory').value

    const expense = {
        name : expenseName,
        nominal : expenseNominal,
        category : expenseCategory
    }

    expenses.push(expense);

    // console.log(expenses);

    renderExpenses();

    // reset form
    expenseForm.reset();
})

// expenseList.innerHTML = '';

function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}


function renderExpenses(){
    let renderList = '';
    let total = 0;
    for(let i = 0; i < expenses.length; i++){
        renderList += `
        <li>
            <span>${expenses[i].name}</span>
            <span>Rp ${expenses[i].nominal}</span>
            <span>${expenses[i].category}</span>
            <button onclick = "deleteExpense(${i})">Hapus</button>
        </li>
        `;

        total += expenses[i].nominal;
    }

    expenseTotal.textContent = `Rp ${total}`;
    expenseList.innerHTML = renderList;
}