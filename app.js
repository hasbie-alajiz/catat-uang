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


function renderExpenses(){
    let renderList = '';
    let renderTotal = '';
    for(let i = 0; i < expenses.length; i++){
        renderList += `<li>${expenses[i].name}</li>`;
        renderTotal += `Rp ${expenses[i].nominal}`;
    }
    expenseList.innerHTML = renderList;
    return;
}
    