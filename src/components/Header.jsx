import React from 'react'
import NewBudget from './NewBudget'
import BudgetControll from './BudgetControll'
// extract budget vars 
const Header = ({
    budget,
    setBudget,
    spents,
    setSpents,
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
            setBudget={setBudget}
            spents={spents}
            setSpents={setSpents}
            setIsValidBudget={setIsValidBudget}
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