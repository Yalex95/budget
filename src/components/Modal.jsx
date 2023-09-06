import React, { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg';
import Message from './Message';

const Modal = ({
  setModalIsVisible,
  animateModal,
  setAnimateModal,
  saveSpent,
  spentEdit,
  setSpentEdit}) => { 

const [message, setMessage] = useState('');
const [name, setName] = useState('');
const [amount , setAmount  ] = useState('');
const [category, setCategory] = useState('');
const [id, setId] = useState('');
const [date, setDate] = useState('');

useEffect(() => {
  
  if(Object.keys(spentEdit).length > 0){
    setName(spentEdit.name)
    setAmount(spentEdit.amount)
    setCategory(spentEdit.category)
    setId(spentEdit.id)
    setDate(spentEdit.date)

  }
}, []);
// const { amount , category, date, id , name} = spentEdit

  //hide modal setiing it state to false
  const hideModal =()=>{
    setAnimateModal(false)
    setName('')
    setAmount('')
    setCategory('')
    setMessage('')
    setSpentEdit({})
    setTimeout(() => {
      setModalIsVisible(false)
    }, 500);
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    // validate form 
    if( [name,amount,category].includes('') ){
      setMessage('Please type valid data')
      setTimeout(() => {
        setMessage('')
      }, 2000);
      return
    }
    setMessage('')
    //send data to app.jsx
    saveSpent({name, amount, category, id})
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
          <img src={CerrarBtn} alt="Cerrar modal"
          onClick={hideModal}
          />
      </div>
      <form 
      onSubmit={handleSubmit}
      className={`formulario ${animateModal ? 'animar' : 'cerrar'}` }>
        <legend>{ (Object.keys(spentEdit).length > 0 ) ? 'Edit' : 'Add New' } Expense</legend>
        {message && <Message type="error">{message} </Message>}
        <div className="campo">
          <label htmlFor="name">Expense Name:</label>
          <input 
          id='name'
          type="text" 
          placeholder='Add Expense Name'
          value={name}
          onChange={e=>setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="amount">Amount:</label>
          <input 
          id='amount'
          type="number" 
          placeholder='Add Amount'
          value={amount}
          onChange={e=>setAmount(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="">--Select--</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="spends">Spends</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
        
        <input 
        type="submit" value={ (Object.keys(spentEdit).length > 0 ) ? 'Edit' : 'Add' } />
        
      </form>
    </div>
  )
}

export default Modal