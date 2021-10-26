import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {title: "Car insurance", amount: 300, date: new Date()},
    {title: "Electricity", amount: 256, date: new Date()},
    {title: "Gas service", amount: 321, date: new Date()},
    {title: "New laptop", amount: 444, date: new Date()}
  ];

  return (
    <Expenses items={expenses}></Expenses>
  );
}

export default App;
