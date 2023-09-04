import React, { useState } from 'react'
import Message from './Message';

const NewBudget = ({budget, setBudget, setIsValidBudget}) => {
  
  // validation message
  const [message, setMessage] = useState('');
  // budget validation
  const handleBudget = (e) =>{
    e.preventDefault()

    if(!budget || budget<=0){
      setMessage('is not a valid value')
      return
    }

    setMessage('')
    // budget is valid
    setIsValidBudget(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handleBudget} className="formulario" >
        <div className='campo'>
            <label htmlFor="budget" >Define a Budget</label>
            <input type="number"
            className='nuevo-presupuesto'
            placeholder='Add your budget'
            value={budget}
            onChange={e=>setBudget(Number(e.target.value))}
            />
            <input type="submit" value="Add" />
            {message && <Message type="error">{message} </Message>}
            
        </div>
      </form>
    </div>
  )
}

export default NewBudget