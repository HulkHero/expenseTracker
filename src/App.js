import React from "react";
import ExpenseForm from "./Components/Form";
import ListData from "./Components/ListData";
import Header from "./Components/Header";

function App() {
  const [data, setData] = React.useState([])
  let totalExpenses = 0;
  let totalIncome = 0;
  let balance = 0;
  data.forEach((item) => {
    if (item.type === "income") {
      totalIncome = item.amount + totalIncome
    }
    else {
      totalExpenses = item.amount + totalExpenses
    }
  })
  balance = totalExpenses + totalIncome
  const handleSubmit = (values, action) => {
    if (values.amount >= 0) {
      let obj = {
        title: values.title,
        amount: Number(values.amount),
        type: "income"
      }
      setData([...data, obj])
    }
    else {
      let obj = {
        title: values.title,
        amount: Number(values.amount),
        type: "expense"
      }
      setData([...data, obj])
    }

    action.resetForm()

  }

  const DeleteItem = (index) => {
    const newData = data.filter((item, i) => {
      return index !== i
    })
    setData(newData)
  }
  return (
    <div className="min-h-screen bg-teal-900" >
      <div className='max-w-3xl min-h-screen max-h-screen justify-between  mx-auto flex flex-col'>
        <Header balance={balance} totalIncome={totalIncome} totalExpenses={totalExpenses}></Header>
        <ListData data={data} DeleteItem={DeleteItem} />
        <ExpenseForm handleSubmit={handleSubmit}></ExpenseForm>
      </div>
    </div>

  );
}

export default App;
