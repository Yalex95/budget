import { useState, useEffect } from 'react'
import NewBudget from './components/NewBudget'
import Header from './components/Header'

import NewSpentIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

import {genId} from "./helpers"
import SpentsList from './components/SpentsList';
import Filter from './components/Filter';

function App() {
  // set state to budget var
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget'))?? 0
    );
  // validate if the budget is validated
  const [isValidBudget, setIsValidBudget] = useState(false);
  // show modal 
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  // spents
  const [spents, setSpents] = useState(
    localStorage.getItem('spents')?JSON.parse(localStorage.getItem('spents')) : []
    )

  // edit spent
  const [spentEdit, setSpentEdit] = useState({});

  // filter state
  const [filter, setFilter ] = useState('');

  const [filteredSpents, setFilteredSpents] = useState([]);

  useEffect(() => {
    if(Object.keys(spentEdit).length > 0){
      
    setModalIsVisible(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
    }
  }, [spentEdit]);

  useEffect(() => {
    if(filter){
      // filter spents by cat
      const filteredSpents = spents.filter(spent => spent.category === filter);
      setFilteredSpents(filteredSpents)
    }
   
  }, [filter]);
//set budget on LS
  useEffect(() => {
    localStorage.setItem('budget',budget ?? 0)

  }, [budget]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0
    if(budgetLS >0){
      setIsValidBudget(true)
    }
  }, []);
  // set spents on local storage
  useEffect(() => {
    localStorage.setItem('spents', JSON.stringify(spents) ?? [])
  }, [spents]);




  const handleNewSpend = () =>{
    setModalIsVisible(true)
    setSpentEdit({})
    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }
  // save spent
  const saveSpent=spent=>{
    if(spent.id){
      // update
      const updatedSpents = spents.map(spendState => spendState.id === spent.id ? spent: spendState)
      setSpents(updatedSpents)
      setSpentEdit({})
    } else{
      spent.id = genId()
      spent.date = Date.now()
      setSpents([...spents,spent])
    }
    setAnimateModal(false)
    setTimeout(() => {
      setModalIsVisible(false)
    }, 500);
  }
// remove spent
const removeSpent = id =>{
  const updatedSpents = spents.filter( spent => spent.id !== id);
  setSpents(updatedSpents)
}
  return (
    <div className={modalIsVisible ?  'fijar' : ''}>
    {/* pass budget,spents vars to our child header */}
    <Header
    budget={budget}
    setBudget={setBudget}
    spents={spents}
    setSpents={setSpents}
    isValidBudget={isValidBudget}
    setIsValidBudget = { setIsValidBudget}
    />
    {/* is buget valid */}
    {
      isValidBudget && (
        <>
        <main>
        <Filter
        filter={filter}
        setFilter = {setFilter}
        />
          <SpentsList
          filter={filter}
          filteredSpents = {filteredSpents}
          spents = { spents}
          setSpentEdit = { setSpentEdit}
          removeSpent = {removeSpent}
          />
        </main>
          <div className="nuevo-gasto">
          <img src={NewSpentIcon} 
          alt="new"
          onClick={handleNewSpend}
          />
          </div>
        </>
      )
    }
    {/* user clicked add new  */}
    {modalIsVisible && (
      <Modal
      setModalIsVisible = {setModalIsVisible}
      animateModal = {animateModal}
      setAnimateModal = {setAnimateModal}
      saveSpent = {saveSpent}
      spentEdit ={spentEdit}
      setSpentEdit={setSpentEdit}
      />
    )}
    </div>
  )
}

export default App
