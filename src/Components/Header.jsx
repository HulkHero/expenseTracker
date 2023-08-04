import React from 'react'

const Header = ({balance,totalExpenses,totalIncome}) => {
  return (
    <div className='flex-grow-0 my-4'>
    <h1 className="text-4xl text-center text-white"> Balance: {balance}</h1>
    <div className='flex flex-row mt-2 justify-evenly'>
      <h1 className="text-4xl text-center text-green-500"> Income: {totalIncome}</h1>
      <h1 className="text-4xl text-center text-red-500"> Expenses: {Math.abs(totalExpenses)}</h1>
    </div>
    </div>
  )
}

export default Header