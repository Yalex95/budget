import React from 'react'
import Spent from './Spent'
import { genId } from '../helpers'

const SpentsList = ({
  filter,
  filteredSpents,
  spents,
  setSpentEdit,
  removeSpent}) => {
  return (
    <div className="listado-gastos contenedor">
        {
          filter ? (
            <>
            <h2>{filteredSpents.length ? `Filtered by ${filter}` : "No spents made"}</h2>
            {
              filteredSpents.map(spent=>(
                <Spent
                key={spent.id}
                spent = {spent}
                setSpentEdit={setSpentEdit}
                removeSpent ={removeSpent}
                />
    
              ))
            }
            </>
          ):
          (<>
            <h2>{spents.length ? 'Spents' : "No spents made"}</h2>
          {spents.map(spent=>(
            <Spent
            key={spent.id}
            spent = {spent}
            setSpentEdit={setSpentEdit}
            removeSpent ={removeSpent}
            />
        ))}
          
          </>)
        }
    </div>
  )
}

export default SpentsList