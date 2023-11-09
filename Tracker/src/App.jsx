import './App.css'

import Balance from './Balance'
import History from './History'
import NewTrans from './NewTrans'

function App() {

  let income = 0
  let expense = 0

  let ExpenseHistory = [{name:"Shoes",price:-300},{name:"Paycheck",price:1200},{name:"Comissions",price:200}]


  for(let x in ExpenseHistory) {
    if(ExpenseHistory[x].price<0) {
      expense = expense + ExpenseHistory[x].price
    } else {
      income = income + ExpenseHistory[x].price
    }
  }

  
  return (
    <div className='app-container'>
      <h2>Expense Tracker</h2>

      <div className='app-item first'><Balance income={income} expense={expense} /></div>
      <div className='app-item'><History ExpenseHistory={ExpenseHistory}/></div>
      <div className='app-item'><NewTrans /></div>
    </div>
  )
}

export default App
