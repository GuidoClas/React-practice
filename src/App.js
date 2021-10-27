import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car insurance", amount: 300, date: new Date() },
    { title: "Electricity", amount: 256, date: new Date() },
    { title: "Gas service", amount: 321, date: new Date() },
    { title: "New laptop", amount: 444, date: new Date() },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
