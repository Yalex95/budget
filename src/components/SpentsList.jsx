import React from 'react'
import Spent from './Spent'
import { genId } from '../helpers'

const SpentsList = ({spents,setSpentEdit,removeSpent}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{spents.length ? 'Spents' : "No spents made"}</h2>
        {
            spents.map(spent=>(
                <Spent
                key={spent.id}
                spent = {spent}
                setSpentEdit={setSpentEdit}
                removeSpent ={removeSpent}
                />
            ))
        }
    </div>
  )
}

export default SpentsList