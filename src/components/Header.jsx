import React from 'react'
import NewBudget from './NewBudget'
import BudgetControll from './BudgetControll'
// extract budget vars 
const Header = ({
    budget,
    setBudget,
    spents,
    isValidBudget,
    setIsValidBudget
    }) => {
  return (
    <header>
        <h1>Expense Planner</h1>
        {
            isValidBudget? 
            (<BudgetControll
            budget={budget}
            spents={spents}
            />)
            :
            (<NewBudget
                budget={budget}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
                />
            )}
        
    </header>
  )
}

export default Header   